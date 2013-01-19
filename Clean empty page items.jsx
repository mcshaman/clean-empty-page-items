	/* Title: Clean empty page items
	Version: 1.2
	
	This script loops through all page items (e.g. text boxes, frames, polygons, etc.). 
	If a page item is assigned graphic content type but contains no graphic or text 
	content type but contains no text it will convert it to unassigned content type. This
	is to t clean up any untidy documents where a users may be missusing the Frame
	tool for drawing shapes or clicking in shapes with the text tool.
	
	Script by McShaman
	http://mcshaman.com */

var myDoc = app.activeDocument;

function cleanDoc(targetObjects) {
	for(var i = 0; i  < targetObjects.length; i++) {
		if(typeof(targetObjects[i].contentType) != "undefined") {
			if(targetObjects[i].contentType == ContentType.GRAPHIC_TYPE) {
				if(targetObjects[i].allPageItems.length == 0) {
					targetObjects[i].contentType = ContentType.UNASSIGNED;
				}
			} else if(targetObjects[i].contentType == ContentType.TEXT_TYPE) {
				if(targetObjects[i].characters.length == 0) {
					targetObjects[i].contentType = ContentType.UNASSIGNED;
				}
			}
		}
	}
}

cleanDoc(myDoc.allPageItems);