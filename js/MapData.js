// JavaScript source code 24.145775, 120.673053

var mainOffice = [
{ level: 1, key: 1, name: "台北市总局", lat: 25.033036, lng: 121.564266, gun1in: 50, gun1out: 11, gun2in: 12, gun2out: 13,errorCount:1 }
, { level: 1, key: 2, name: "基隆市警察局总局", lat: 25.132677, lng: 121.746782, gun1in: 70, gun1out: 15, gun2in: 20, gun2out: 15, errorCount: 1 }
, { level: 1, key: 3, name: "新北市警察局总局", lat: 25.016895, lng: 121.463371, gun1in: 60, gun1out: 10, gun2in: 20, gun2out: 15, errorCount: 1 }
, { level: 1, key: 4, name: "新竹市警察局总局", lat: 24.813330, lng: 120.987003, gun1in: 60, gun1out: 11, gun2in: 21, gun2out: 15, errorCount: 1 }
, { level: 1, key: 5, name: "桃园市警察局总局", lat: 24.993666, lng: 121.300914, gun1in: 64, gun1out: 12, gun2in: 22, gun2out: 15, errorCount: 1 }
, { level: 1, key: 6, name: "嘉義市警察局总局", lat: 23.4790323, lng: 120.414277, gun1in: 68, gun1out: 13, gun2in: 23, gun2out: 15, errorCount: 1 }
, { level: 1, key: 7, name: "台中市警察局总局", lat: 24.145775, lng: 120.673053, gun1in: 68, gun1out: 14, gun2in: 24, gun2out: 15, errorCount: 1 }
, { level: 1, key: 8, name: "台南市警察局总局", lat: 22.999339, lng: 120.227659, gun1in: 68, gun1out: 15, gun2in: 25, gun2out: 15, errorCount: 1 }
, { level: 1, key: 9, name: "高雄市警察局总局", lat: 22.626588, lng: 120.301381, gun1in: 55, gun1out: 16, gun2in: 26, gun2out: 15, errorCount: 1 }
//, {level: 1, key: 10, name: "宜蘭市总局", lat: 24.700313, lng: 121.740368, gun1in: 20, gun1out: 15, gun2in: 20, gun2out: 15}
//, { level: 1, key: 11, name: "花蓮市总局", lat: 23.9780038, lng: 121.5904469, gun1in: 20, gun1out: 15, gun2in: 20, gun2out: 15 }
, { level: 1, key: 12, name: "台東市警察局总局", lat: 22.797320, lng: 121.071538, gun1in: 52, gun1out: 17, gun2in: 27, gun2out: 15, errorCount: 1 }

]

var subOffice = [
{ level: 2, key: 1, pkey: 2, name: "基隆市警察局第一分局", lat: 25.127373, lng: 121.740709, gun1in: 10, gun1out: 11, gun2in: 12, gun2out: 13, errorCount: 1 }
, { level: 2, key: 13, pkey: 2, name: "基隆市警察局第四分局", lat: 25.121940, lng: 121.721144, gun1in: 10, gun1out: 11, gun2in: 12, gun2out: 13, errorCount: 1 }
, { level: 2, key: 14, pkey: 2, name: "基隆市警察局第三分局", lat: 25.098071, lng: 121.715359, gun1in: 11, gun1out: 15, gun2in: 31, gun2out: 15, errorCount: 1 }
, { level: 2, key: 2, pkey: 2, name: "基隆市警察局第二分局", lat: 25.130863, lng: 121.746314, gun1in: 11, gun1out: 15, gun2in: 31, gun2out: 15, errorCount: 1 }
, { level: 2, key: 3, pkey: 1, name: "台北市警察局第一分局", lat: 25.053906, lng: 121.557069, gun1in: 12, gun1out: 16, gun2in: 32, gun2out: 13, errorCount: 1 }
, { level: 2, key: 7, pkey: 1, name: "台北市警察局第二分局", lat: 25.035896, lng: 121.564160, gun1in: 13, gun1out: 17, gun2in: 33, gun2out: 12, errorCount: 1 }
, { level: 2, key: 4, pkey: 3, name: "新北市警察局第一分局", lat: 25.017602, lng: 121.466054, gun1in: 14, gun1out: 18, gun2in: 34, gun2out: 11, errorCount: 1 }
, { level: 2, key: 13, pkey: 4, name: "新竹市警察局第一分局", lat: 24.801321, lng: 120.970495, gun1in: 15, gun1out: 19, gun2in: 35, gun2out: 10, errorCount: 1 }
, { level: 2, key: 5, pkey: 5, name: "桃园市警察局第一分局", lat: 24.987317, lng: 121.279583, gun1in: 16, gun1out: 20, gun2in: 36, gun2out: 9, errorCount: 1 }
, { level: 2, key: 6, pkey: 6, name: "嘉義市警察局第一分局", lat: 23.478393, lng: 120.423403, gun1in: 17, gun1out: 21, gun2in: 37, gun2out: 8, errorCount: 1 }
, { level: 2, key: 7, pkey: 7, name: "台中市警察局第一分局", lat: 24.147195, lng: 120.669626, gun1in: 18, gun1out: 22, gun2in: 38, gun2out: 8, errorCount: 1 }
, { level: 2, key: 8, pkey: 8, name: "台南市警察局第一分局", lat: 23.001685, lng: 120.230936, gun1in: 19, gun1out: 23, gun2in: 39, gun2out: 7, errorCount: 1 }
, { level: 2, key: 9, pkey: 9, name: "高雄市警察局第一分局", lat: 22.617563, lng: 120.301560, gun1in: 20, gun1out: 24, gun2in: 40, gun2out: 6, errorCount: 1 }
//, { level: 2, key: 10, pkey: 10, name: "宜蘭第一分局", lat: 24.757552, lng: 121.753841, gun1in: 20, gun1out: 15, gun2in: 20, gun2out: 15 }
//, { level: 2, key: 11, pkey: 11, name: "花蓮第一分局", lat: 23.978018, lng: 121.600218, gun1in: 20, gun1out: 15, gun2in: 20, gun2out: 15 }
, { level: 2, key: 12, pkey: 12, name: "台東市警察局第一分局", lat: 22.797617, lng: 121.072482, gun1in: 22, gun1out: 25, gun2in: 44, gun2out: 5, errorCount: 1 }

]

var endOffice = [
{ level: 3, pkey: 1, name: "基隆市警察局第一分局忠二路派出所", lat: 25.127373, lng: 121.740709, gun1in: 10, gun1out: 11, gun2in: 12, gun2out: 13, errorCount: 1 }
, { level: 3, pkey: 1, name: "基隆市警察局第一分局延平街派出所", lat: 25.127902, lng: 121.748767, gun1in: 10, gun1out: 11, gun2in: 12, gun2out: 13, errorCount: 1 }
, { level: 3, pkey: 2, name: "基隆市警察局第二分局信六路派出所", lat: 25.132677, lng: 121.746782, gun1in: 13, gun1out: 12, gun2in: 22, gun2out: 19, errorCount: 1 }
, { level: 3, pkey: 2, name: "基隆市警察局第二分局深澳坑派出所", lat: 25.127255, lng: 121.785335, gun1in: 13, gun1out: 12, gun2in: 22, gun2out: 19, errorCount: 1 }
, { level: 3, pkey: 2, name: "基隆市警察局第二分局八斗子派出所", lat: 25.139780, lng: 121.793224, gun1in: 13, gun1out: 12, gun2in: 22, gun2out: 19, errorCount: 1 }
, { level: 3, pkey: 2, name: "基隆市警察局第二分局八斗子派出所", lat: 25.127017, lng: 121.762951, gun1in: 13, gun1out: 12, gun2in: 22, gun2out: 19, errorCount: 1 }
, { level: 3, pkey: 2, name: "基隆市警察局第二分局安澜桥派出所", lat: 25.142333, lng: 121.760857, gun1in: 13, gun1out: 12, gun2in: 22, gun2out: 19, errorCount: 1 }
, { level: 3, pkey: 2, name: "基隆市警察局第二分局和一路派出所", lat: 25.154982, lng: 121.764673, gun1in: 13, gun1out: 12, gun2in: 22, gun2out: 19, errorCount: 1 }
, { level: 3, pkey: 2, name: "基隆市警察局第二分局正濱派出所", lat: 25.154982, lng: 121.764673, gun1in: 13, gun1out: 12, gun2in: 22, gun2out: 19, errorCount: 1 }
, { level: 3, pkey: 3, name: "台北市警察局第一分局第二派出所", lat: 25.033713, lng: 121.565062, gun1in: 11, gun1out: 3, gun2in: 23, gun2out: 20, errorCount: 1 }
, { level: 3, pkey: 3, name: "台北市警察局第一分局第一派出所", lat: 25.038379, lng: 121.554247, gun1in: 14, gun1out: 11, gun2in: 24, gun2out: 18, errorCount: 1 }
, { level: 3, pkey: 7, name: "台北市警察局第二分局台北第一派出所", lat: 25.053380, lng: 121.550492, gun1in: 15, gun1out: 15, gun2in: 25, gun2out: 16, errorCount: 1 }
, { level: 3, pkey: 4, name: "新北市警察局第一分局第一派出所", lat: 25.016915, lng: 121.461684, gun1in: 16, gun1out: 16, gun2in: 26, gun2out: 15, errorCount: 1 }
, { level: 3, pkey: 4, name: "新北市警察局第一分局第二派出所", lat: 25.015303, lng: 121.465473, gun1in: 17, gun1out: 17, gun2in: 27, gun2out: 13, errorCount: 1 }
, { level: 3, pkey: 5, name: "桃园市警察局第一分局第一派出所", lat: 24.987612, lng: 121.301143, gun1in: 18, gun1out: 18, gun2in: 28, gun2out: 12, errorCount: 1 }
, { level: 3, pkey: 5, name: "桃园市警察局第一分局第二派出所", lat: 24.990428, lng: 121.281156, gun1in: 18, gun1out: 18, gun2in: 28, gun2out: 12, errorCount: 1 }
, { level: 3, pkey: 6, name: "嘉義市警察局第一分局第一派出所", lat: 23.480993, lng: 120.452248, gun1in: 19, gun1out: 19, gun2in: 29, gun2out: 11, errorCount: 1 }
, { level: 3, pkey: 6, name: "嘉義市警察局第一分局第二派出所", lat: 23.478393, lng: 120.423403, gun1in: 19, gun1out: 19, gun2in: 29, gun2out: 11, errorCount: 1 }

, { level: 3, pkey: 7, name: "台中市警察局第一分局第一派出所", lat: 24.147635, lng: 120.665352, gun1in: 20, gun1out: 20, gun2in: 30, gun2out: 10, errorCount: 1 }
, { level: 3, pkey: 8, name: "台南市警察局第一分局第一派出所", lat: 23.006862, lng: 120.232030, gun1in: 21, gun1out: 12, gun2in: 21, gun2out: 8, errorCount: 1 }
, { level: 3, pkey: 9, name: "高雄市警察局第一分局第一派出所", lat: 22.633012, lng: 120.310986, gun1in: 22, gun1out: 22, gun2in: 25, gun2out: 5, errorCount: 1 }
, { level: 3, pkey: 9, name: "高雄市警察局第一分局第二派出所", lat: 22.621406, lng: 120.300323, gun1in: 22, gun1out: 22, gun2in: 25, gun2out: 5, errorCount: 1 }
//, { level: 3, pkey: 10, name: "宜蘭第一派出所", lat: 23.981539, lng: 121.605711, gun1in: 20, gun1out: 15, gun2in: 20, gun2out: 15 }
, { level: 3, pkey: 10, name: "台東市警察局第一分局第一派出所", lat: 22.797348, lng: 121.073848, gun1in: 15, gun1out: 23, gun2in: 31, gun2out: 5, errorCount: 1 }
, { level: 3, pkey: 13, name: "新竹市警察局第一分局第一派出所", lat: 24.794709, lng: 120.974380, gun1in: 11, gun1out: 24, gun2in: 32, gun2out: 2, errorCount: 1 }
, { level: 3, pkey: 13, name: "基隆市警察局第四分局暨安樂派出所", lat: 25.123210, lng: 121.721971, gun1in: 11, gun1out: 24, gun2in: 32, gun2out: 2, errorCount: 1 }
, { level: 3, pkey: 13, name: "基隆市警察局第四分局暨安定派出所", lat: 25.132219, lng: 121.727679, gun1in: 11, gun1out: 24, gun2in: 32, gun2out: 2, errorCount: 1 }
, { level: 3, pkey: 13, name: "基隆市警察局第四分局中山派出所", lat: 25.131466, lng: 121.735441, gun1in: 11, gun1out: 24, gun2in: 32, gun2out: 2, errorCount: 1 }
, { level: 3, pkey: 13, name: "基隆市警察局第四分局中华路派出所", lat: 25.147004, lng: 121.738902, gun1in: 11, gun1out: 24, gun2in: 32, gun2out: 2, errorCount: 1 }
, { level: 3, pkey: 13, name: "基隆市警察局第四分局大武崙派出所", lat: 25.140897, lng: 121.704890, gun1in: 11, gun1out: 24, gun2in: 32, gun2out: 2, errorCount: 1 }
, { level: 3, pkey: 14, name: "基隆市警察局第三分局暖暖派出所", lat: 25.100723, lng: 121.737690, gun1in: 11, gun1out: 24, gun2in: 32, gun2out: 2, errorCount: 1 }
, { level: 3, pkey: 14, name: "基隆市警察局第三分局碇内派出所", lat: 25.099503, lng: 121.755150, gun1in: 11, gun1out: 24, gun2in: 32, gun2out: 2, errorCount: 1 }
, { level: 3, pkey: 14, name: "基隆市警察局第三分局八堵派出所", lat: 25.108896, lng: 121.732035, gun1in: 11, gun1out: 24, gun2in: 32, gun2out: 2, errorCount: 1 }
]



//25.139780, 121.793224


