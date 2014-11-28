var tnt_theme = function () {
    var theme = function (t, div) {
	t
	    .layout (tnt.tree.layout.vertical()
		     .width(650)
		    )
	    .label (tnt.tree.label.text()
		    .height(15)
		   );
	t(div);
    };

    return theme;
};
