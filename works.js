/* HOW TO ADD YOUR OWN PUBMAT FROM GOOGLE DRIVE
   1. Upload the image to Google Drive.
   2. Right-click it > Share > General access > "Anyone with the link" (Viewer).
   3. Copy the link. The file ID is the long part between /d/ and /view:
      https://drive.google.com/file/d/THIS_PART_IS_THE_ID/view
   4. Add a line to WORKS below, like this:
      {t:"Maria & Jon",k:"Wedding",kind:"Weddings",id:"THIS_PART_IS_THE_ID"},
   Delete the sample lines (the ones with c:[...]) once you have your real work.
   kind = the filter button it appears under. */
const WORKS=[
    {t:"Karatedo",k:"Sports",kind:"Sports",id:"1SBM8K5qRro6liENcKDcP73_TUGcuSn7n"},
 {t:"Night Run 5K",k:"Sports",kind:"Sports",d:"Nov 08",v:"City Oval",c:["#FFD400","#14132B","#FF4A1C","#2B3BFF"],s:""},
 {t:"Maria & Jon",k:"Wedding",kind:"Weddings",d:"Dec 14",v:"Garden Hall",c:["#14132B","#FFE3EC","#FF4A1C","#FFD400"],s:"v2"},
 {t:"Tech Talk 26",k:"Seminar",kind:"Seminars",d:"Oct 30",v:"Hall B",c:["#F1F0F6","#14132B","#2B3BFF","#FF4A1C"],s:"v3"},
 {t:"Freshie Night",k:"Org event",kind:"Org events",d:"Nov 21",v:"Gym",c:["#FF4A1C","#FFF3E8","#14132B","#FFD400"],s:""},
 {t:"Bake Fair",k:"Fundraiser",kind:"Org events",d:"Nov 03",v:"Quad",c:["#FFB8D2","#14132B","#FF4A1C","#FFFFFF"],s:"v2"},
 {t:"Sofia's 18th",k:"Debut",kind:"Debuts",d:"Nov 29",v:"Grand Ballroom",c:["#2B3BFF","#FFFFFF","#FFD400","#FF4A1C"],s:"v3"},
 {t:"Migo turns 7",k:"Birthday",kind:"Birthdays",d:"Nov 16",v:"Party Place",c:["#8FD3FF","#14132B","#FFD400","#FF4A1C"],s:"v2"},
 {t:"Career Day",k:"Seminar",kind:"Seminars",d:"Nov 12",v:"Auditorium",c:["#1FBF6B","#14132B","#FFFFFF","#FFD400"],s:""},
 {t:"Intramurals",k:"Sports",kind:"Sports",d:"Dec 02",v:"Main Court",c:["#2B3BFF","#FFD400","#FF4A1C","#FFFFFF"],s:"v2"}
];