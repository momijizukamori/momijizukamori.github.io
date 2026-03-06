import csv

portrait_block = """
		<div class="sword scale-100 {limited}">
			<div class="image">
				<img class="top" src="{id}_top.png">
				<img class="bottom hide" src="{id}_bottom.png">
			 	<div class="overlay">
					<div data-square="div1" class="div1"> </div>
					<div data-square="div2" class="div2"> </div>
					<div data-square="div3" class="div3"> </div>
					<div data-square="div4" class="div4"> </div>
					<div data-square="div5" class="div5"> </div>
					<div data-square="div6" class="div6"> </div>
					<div data-square="div7" class="div7"> </div>
					<div data-square="div8" class="div8"> </div>
					<div data-square="div9" class="div9"> </div>
				</div> 
			</div>
			<div class="name">{name}</div>
		</div>
"""

portraits = []

with open('swords.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile, fieldnames=["id", "name", "available", "limited"])
    for row in reader:
        if row['available'] == "1":
            limited = ""
            if row["limited"] == "1":
                limited = "limited" 
            portraits.append(portrait_block.format(name=row["name"], id=row["id"], limited=limited))

with open('template.html', encoding="utf-8") as f:
    template = f.read()
    out = template.replace('%PORTRAITS%', "\n".join(portraits))

    with open('index.html', 'w', encoding="utf-8") as outfile:
        outfile.write(out)
