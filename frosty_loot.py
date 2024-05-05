import numpy as np
import os
import pandas as pd
import random

loot = pd.read_csv("./loot_list.csv")

coin = loot.query("type=='coin'").reset_index().drop(columns=["index"])
lumber = loot.query("type=='lumber'").reset_index().drop(columns=["index"])
metal = loot.query("type=='metal'").reset_index().drop(columns=["index"])
hide = loot.query("type=='hide'").reset_index().drop(columns=["index"])
arrowvine = loot.query("type=='arrowvine'").reset_index().drop(columns=["index"])
axenut = loot.query("type=='axenut'").reset_index().drop(columns=["index"])
corpsecap = loot.query("type=='corpsecap'").reset_index().drop(columns=["index"])
flamefruit = loot.query("type=='flamefruit'").reset_index().drop(columns=["index"])
rockroot = loot.query("type=='rockroot'").reset_index().drop(columns=["index"])
snowthistle = loot.query("type=='snowthistle'").reset_index().drop(columns=["index"])
random_item = loot.query("type=='random-item'").reset_index().drop(columns=["index"])
scenario_coin = loot.query("type=='scenario-coin'").reset_index().drop(columns=["index"])

print("Specify how many coin, lumber, metal, hide, arrowvine, axenut, corpsecap, flamefruit, rockroot, snowthistle, random-item, scenario-coin cards to include.")
print("Empty values will be treated as zeros.")
print("e.g. for 6 coin, 3 metal, 2 rockfruit, 2 snowthistle, input: 6,0,3,0,0,0,0,0,2,2,0,0 or 6,,3,,,,,,2,2,, (there should be 12 fields).")

# input1 = "6,,3,,,,,,2,2,,"
input1 = input()
card_types = [(int(x) if x else 0) for x in input1.split(',')]
while len(card_types) != 12:
    f"Sorry, your input should have had 12 fields, whereas you supplied {len(input1)}"
    input1 = input()
    card_types = [(int(x) if x else 0) for x in input1.split(',')]


print("Specify the total number of loot cards to draw.")
input2 = input()
total_cards = int(input2)

types = [coin,lumber,metal,hide,arrowvine,axenut,corpsecap,flamefruit,rockroot,snowthistle,random_item,scenario_coin]
deck = []
for i,n in enumerate(card_types):
    if n==0:
        # no cards of this type
        pass
    else:
        if len(deck)==0:
            y = random.sample(range(len(types[i])),n)
            deck = types[i].iloc[y]
        else:
            z = random.sample(range(len(types[i])),n)
            to_add = types[i].iloc[z]
            deck = pd.concat([deck,to_add])


deck_t = deck.reset_index().drop(columns=['index']).T

x = random.sample(range(len(deck)),total_cards)
for y in x:
    popped_row = deck_t.pop(y)
    s = "open img/" + popped_row.filename
    os.system(s)