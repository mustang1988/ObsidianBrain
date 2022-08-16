---
Profiles:
  - Name: "ConstrainedBaseline"
    Value: "42e0"
  - Name: "Baseline"
    Value: "4200"
  - Name: "Main"
    Value: "4d00"
  - Name: "ConstrainedHigh"
    Value: "640c"
  - Name: "High"
    Value: "6400"
Levels:
  - Name: "1.b"
    Value: 0
  - Name: "1"
    Value: 10
  - Name: "1.1"
    Value: 11
  - Name: "1.2"
    Value: 12
  - Name: "1.3"
    Value: 13
  - Name: "2"
    Value: 20
  - Name: "2.1"
    Value: 21
  - Name: "2.2"
    Value: 22
  - Name: "3"
    Value: 30
  - Name: "3.1"
    Value: 31
  - Name: "3.2"
    Value: 32
  - Name: "4"
    Value: 40
  - Name: "4.1"
    Value: 41
  - Name: "4.2"
    Value: 42
  - Name: "5"
    Value: 50
  - Name: "5.1"
    Value: 51
  - Name: "5.2"
    Value: 52
---
````ad-quote
title: Android Support
collapse: open

```dataviewjs
let datas = [];
let map = new Map();
let { Profiles, Levels } = dv.current();
// Andoird 仅支持 Constrained Profile 和 Level 3.1
// Profiles = Profiles.filter(profile => profile.Name.includes('Const'))
Levels = Levels.filter(level => level.Value == 31 || level.Value == 0)
// End Android 过滤数据
const rows = [];
for(const profile of Profiles){
	for(const level of Levels){
		if(level.Value == 0 && profile.Name.includes("High")){
			continue;
		}
		rows.push({profile, level});
	}
}

dv.table(
	["profile-level-id", "profile", "level"],
	rows.map(row => {
		const { profile, level } = row;
		const lv_str = level.Value.toString(16);
		let id = `${profile.Value}${lv_str.length == 1 ? '0'+lv_str:lv_str}`;
		if(level.Value == 0){
			switch(profile.Name){
				case 'ConstrainedBaseline':
					id = "42f00b";
					break;
				case 'Baseline':
					id = "42100b";
					break;
				case 'Main':
					id = "4d100b"
					break;
			}
		}
		return [
			id,
			profile.Name,
			level.Name
		];
	})
);
```
````

````ad-quote
title: All
collapse: open

```dataviewjs
let datas = [];
let map = new Map();
let { Profiles, Levels } = dv.current();
// Profiles = Profiles.filter(profile => profile.Name.includes('Const'))
// Levels = Levels.filter(level => level.Value==0 || (level.Value >=30 && level.Value <=32))
for(const profile of Profiles){
	for(const level of Levels){
		if(level.Value == 0 && profile.Name.includes("High")){
			continue;
		}
		if(map.get(profile.Name)){
			map.get(profile.Name).push({profile, level});
		} else {
			map.set(profile.Name, [])
			map.get(profile.Name).push({profile, level})
		}
	}
}
for(const key of map.keys()){
	dv.header(2, key);
	dv.table(
		["profile-level-id", "level"],
		map.get(key).map(row => {
			const { profile, level } = row;
			const lv_str = level.Value.toString(16);
			let id = `${profile.Value}${lv_str.length == 1 ? '0'+lv_str:lv_str}`;
			if(level.Value == 0){
				switch(profile.Name){
					case 'ConstrainedBaseline':
						id = "42f00b";
						break;
					case 'Baseline':
						id = "42100b";
						break;
					case 'Main':
						id = "4d100b"
						break;
				}
			}
			return [
				id,
				level.Name
			];
		})
	);
}
```
````
