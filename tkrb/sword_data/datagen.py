import csv
import json


SWORDS = {}
TYPE_MAP = {
    '1': 'tantou',
    '2': 'wakizashi',
    '3': 'uchigatana',
    '4': 'tachi',
    '5': 'oodachi',
    '6': 'yari',
    '7': 'naginata',
    '10': 'tsurugi'
}

SCHOOL_MAP = {
    '0': None,
    '2': 'Sanjou',
    '3': 'Miike',
    '4': 'Aoe',
    '5': 'Awataguchi',
    '6': 'Kobizen',
    '7': 'Rai',
    '8': 'Muramasa',
    '9': 'Sadamune',
    '10': 'Osafune',
    '11': 'Samonji',
    '12': 'Kanesada',
    '13': 'Horikawa',
    '14': 'Kotetsu',
    '15': 'Kotetsu...?',
    '16': 'Masamune',
    '17': 'Gou',
    '18': 'Fukuoka Ichimonji',
    '19': 'Bungo Yukihira',
    '20': 'Hiromitsu',
    '21': 'Ukai'

}

with open('name_long.json') as fp:
    long_names = json.load(fp)

with open('name_short.json') as fp:
    short_names = json.load(fp)

with open('SwordMaster.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile, quotechar="'", skipinitialspace=True)
    for row in reader:
        if int(row['\ufeffSwordId']) < 901:
            sword = {
                'name_jp': row['Name'],
                'name_kana': row['Alias'],
                'kiwame': (row['Symbol'] == '2'),
                'rarity': row['Rarity'],
                'type': TYPE_MAP[row['Type']],
                'school': SCHOOL_MAP[row['StyleId']],
                'name_en': long_names.get(row['\ufeffSwordId'], ''),
                'name_short': short_names.get(row['\ufeffSwordId'], '')
            }
            SWORDS[row['\ufeffSwordId']] = sword

    with open('swords.json', 'w') as fp:
        json.dump(SWORDS, fp, ensure_ascii=False, indent=2)