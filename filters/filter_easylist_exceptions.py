import re
import requests

easylist = requests.get("https://easylist-downloads.adblockplus.org/easylist.txt").text.split('\n')
bad_domains = set()
bad_exceptions = set()

for line in easylist:
    if line.startswith('||'):
        split_line = line[2:].split('^$', 1)
        if len(split_line) == 2:
            domain, options = split_line
            if '/' not in domain and '*' not in domain and re.search(r'(^|,)third-party', options):
                bad_domains.add(domain)
    elif line.startswith('@@||'):
        domain = re.split(r'[\^\*/]', line[4:], 1)[0]
        if domain in bad_domains:
            bad_exceptions.add(domain)

additional_domains = (
    'ads-v-darwin.hulu.com',
    'google-analytics.com',
    'http://kissanime.com/Ads',
    'http://kissanime.com/ads',
    'http://kissmanga.com/ads',
    'referrer.disqus.com',
    'whos.amung.us'
)

for domain in additional_domains:
    bad_exceptions.add(domain)

with open('ublock_dynamic_rules.txt', 'w') as f:
    f.write('no-strict-blocking: sourceforge.net true\n')
    f.write('\n'.join('* %s * block' % x for x in sorted(bad_exceptions)))
