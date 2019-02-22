//One global variable to set, use true if you want the menus to reinit when the user changes text size (recommended):
resizereinit=true;

menu[1] = {
id:'menu1', //use unique quoted id (quoted) REQUIRED!!
menutop:100,     // initial top offset - except for top menu, where it is meaningless
keepinview:true,   // Use false (for not static) - OR - true or numeric top offset when page scrolls
d_colspan:3,     // Available columns in menu body as integer
allowtransparent:true, // true to allow page to show through menu if other bg's are transparent or border has gaps
barwidth:10,     // bar (the vertical cell) width
wrapbar:false,    // extend and wrap bar below menu for a more solid look (default false) - will revert to false for top menu
hdingwidth:270,  // heading - non linked horizontal cells width
hdingheight:25,  // heading - non linked horizontal cells height
hdingindent:1,   // heading - non linked horizontal cells text-indent represents ex units (@8 pixels decimals allowed)
linkheight:15,   // linked horizontal cells height
linktopad:3,     // linked horizontal cells top padding
borderwidth:1,   // inner border-width used for this menu


bordercolor:'#4d6814', // inner border color
borderstyle:'solid',    // inner border style (solid, dashed, inset, etc.)
outbrdwidth:'0ex 0ex 1ex 0ex', // outer border-width used for this menu (top right bottom left)
outbrdcolor:'#4d6814',  // outer border color
outbrdstyle:'solid',     // outer border style (solid, dashed, inset, etc.)
barcolor:'white',        // bar (the vertical cell) text color
barbgcolor:'#4d6814',   // bar (the vertical cell) background color
barfontweight:'bold',    // bar (the vertical cell) font weight
baralign:'center',       // bar (the vertical cell) right left or center text alignment
menufont:'arial',      // menu font
fontsize:'70%',          // express as percentage with the % sign
hdingcolor:'white',      // heading - non linked horizontal cells text color
hdingbgcolor:'#4d6814',  // heading - non linked horizontal cells background color
hdingfontweight:'bold',  // heading - non linked horizontal cells font weight
hdingvalign:'middle',    // heading - non linked horizontal cells vertical align (top, middle or center)
hdingtxtalign:'left',    // heading - non linked horizontal cells right left or center text alignment
linktxtalign:'left',     // linked horizontal cells right left or center text alignment
linktarget:'',           // default link target, leave blank for same window (other choices: _new, _top, or a window or frame name)
kviewtype:'absolute',       // Type of keepinview - 'fixed' utilizes fixed positioning where available, 'absolute' fluidly follows page scroll
menupos:'left',         // set side that menu slides in from (right or left or top)
bartext:'MENU',       // bar text (the vertical cell) use text or img tag


menuItems:[
//[name, link, target, colspan, endrow?] - leave 'link' and 'target' blank to make a header
["Mesquite Menu"], //create header
["Funding Priorities", "index.html#priorities", ""],
["National Management Map", "index.html#mgmntmap", ""],
["Potential Distribution Map", "index.html#potmaps", ""],
["National Management Guide", "index.html#mgmntguide", ""],
["National Management Manual", "index.html#nmm", ""],
["Monitoring and Evaluation", "index.html#mande", ""],
["Review of Progress Against the Strategic Plan", "index.html#review", ""],
["State & Territory Contacts", "index.html#contacts", ""],
["National Strategy Download", "index.html#strategy", ""],
["Documents and Resources Available", "", ""], //create header
["Top of Page", "resources.htm#top", ""],
["Awareness products", "resources.htm#awareness", ""]
]};
make_menus();