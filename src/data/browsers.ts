/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// file generated from css-schema.xml and https://github.com/mdn/data using css-exclude_generate_browserjs.js

export const data : any = {
	"css": {
		"atdirectives": [],
		"pseudoclasses": [],
		"pseudoelements": [],
		"properties": [
			{
				name: "align-items",
				desc: "Aligns flex items along the cross axis of the current line of the flex container.",
				browsers: "E,C29,FF22,IE11,O12.1,S9",
				restriction: "enum",
				values: [
					{
						name: "baseline",
						desc: "If the flex item’s inline axis is the same as the cross axis, this value is identical to 'flex-start'. Otherwise, it participates in baseline alignment."
					},
					{
						name: "center",
						desc: "The flex item’s margin box is centered in the cross axis within the line."
					},
					{
						name: "flex-end",
						desc: "The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line."
					},
					{
						name: "flex-start",
						desc: "The cross-start margin edge of the flex item is placed flush with the cross-start edge of the line."
					},
					{
						name: "stretch",
						desc: "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
					}
				]
			},
			{
				name: "align-self",
				desc: "Allows the default alignment along the cross axis to be overridden for individual flex items.",
				browsers: "E12,FF20,C36,IE11,O12.1",
				restriction: "enum",
				values: [
					{
						name: "auto",
						desc: "Computes to the value of 'align-items' on the element’s parent, or 'stretch' if the element has no parent. On absolutely positioned elements, it computes to itself."
					},
					{
						name: "baseline",
						desc: "If the flex item’s inline axis is the same as the cross axis, this value is identical to 'flex-start'. Otherwise, it participates in baseline alignment."
					},
					{
						name: "center",
						desc: "The flex item’s margin box is centered in the cross axis within the line."
					},
					{
						name: "flex-end",
						desc: "The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line."
					},
					{
						name: "flex-start",
						desc: "The cross-start margin edge of the flex item is placed flush with the cross-start edge of the line."
					},
					{
						name: "stretch",
						desc: "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
					}
				]
			},
			{
				name: "backface-visibility",
				desc: "Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.",
				browsers: "all",
				restriction: "enum",
				values: [
					{
						name: "hidden",
						desc: "Back side is hidden."
					},
					{
						name: "visible",
						desc: "Back side is visible."
					}
				]
			},
			{
				name: "background-color",
				desc: "Sets the background color of an element.",
				browsers: "all",
				restriction: "color"
			},
			{
				name: "border-bottom-color",
				desc: "Sets the color of the bottom border.",
				browsers: "all",
				restriction: "color"
			},
			{
				name: "border-bottom-left-radius",
				desc: "Defines the radii of the bottom left outer border edge.",
				browsers: "all",
				restriction: "length, percentage"
			},
			{
				name: "border-bottom-right-radius",
				desc: "Defines the radii of the bottom right outer border edge.",
				browsers: "all",
				restriction: "length, percentage"
			},
			{
				name: "border-bottom-width",
				desc: "Sets the thickness of the bottom border.",
				browsers: "all",
				restriction: "length, line-width"
			},
			{
				name: "border-color",
				desc: "The color of the border around all four edges of an element.",
				browsers: "all",
				restriction: "color",
				values: []
			},
			{
				name: "border-left-color",
				desc: "Sets the color of the left border.",
				browsers: "all",
				restriction: "color"
			},
			{
				name: "border-left-width",
				desc: "Sets the thickness of the left border.",
				browsers: "all",
				restriction: "length, line-width"
			},
			{
				name: "border-radius",
				desc: "Defines the radii of the outer border edge.",
				browsers: "all",
				restriction: "length, percentage"
			},
			{
				name: "border-right-color",
				desc: "Sets the color of the right border.",
				browsers: "all",
				restriction: "color"
			},
			{
				name: "border-right-width",
				desc: "Sets the thickness of the right border.",
				browsers: "all",
				restriction: "length, line-width"
			},
			{
				name: "border-style",
				desc: "The style of the border around edges of an element.",
				browsers: "all",
				restriction: "line-style",
				values: []
			},
			{
				name: "border-top-color",
				desc: "Sets the color of the top border.",
				browsers: "all",
				restriction: "color"
			},
			{
				name: "border-top-left-radius",
				desc: "Defines the radii of the top left outer border edge.",
				browsers: "all",
				restriction: "length, percentage"
			},
			{
				name: "border-top-right-radius",
				desc: "Defines the radii of the top right outer border edge.",
				browsers: "all",
				restriction: "length, percentage"
			},
			{
				name: "border-top-width",
				desc: "Sets the thickness of the top border.",
				browsers: "all",
				restriction: "length, line-width"
			},
			{
				name: "border-width",
				desc: "Shorthand that sets the four 'border-*-width' properties. If it has four values, they set top, right, bottom and left in that order. If left is missing, it is the same as right; if bottom is missing, it is the same as top; if right is missing, it is the same as top.",
				browsers: "all",
				restriction: "length, line-width",
				values: []
			},
			{
				name: "bottom",
				desc: "Specifies how far an absolutely positioned box's bottom margin edge is offset above the bottom edge of the box's 'containing block'.",
				browsers: "all",
				restriction: "length, percentage",
				values: [
					{
						name: "auto",
						desc: "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
					}
				]
			},
			{
				name: "color",
				desc: "Color of an element's text",
				browsers: "all",
				restriction: "color"
			},
			{
				name: "flex",
				desc: "Specifies the components of a flexible length: the flex grow factor and flex shrink factor, and the flex basis.",
				browsers: "all",
				restriction: "length, number, percentage",
				values: [
					{
						name: "auto",
						desc: "Retrieves the value of the main size property as the used 'flex-basis'."
					},
					{
						name: "none",
						desc: "Expands to '0 0 auto'."
					}
				]
			},
			{
				name: "flex-basis",
				desc: "Sets the flex basis.",
				browsers: "all",
				restriction: "length, number, percentage",
				values: [
					{
						name: "auto",
						desc: "Retrieves the value of the main size property as the used 'flex-basis'."
					}
				]
			},
			{
				name: "flex-direction",
				desc: "Specifies how flex items are placed in the flex container, by setting the direction of the flex container’s main axis.",
				browsers: "all",
				restriction: "enum",
				values: [
					{
						name: "column"
					},
					{
						name: "column-reverse"
					},
					{
						name: "row"
					},
					{
						name: "row-reverse"
					}
				]
			},
			{
				name: "flex-grow",
				desc: "Sets the flex grow factor. Negative numbers are invalid.",
				browsers: "all",
				restriction: "number"
			},
			{
				name: "flex-shrink",
				desc: "Sets the flex shrink factor. Negative numbers are invalid.",
				browsers: "all",
				restriction: "number"
			},
			{
				name: "flex-wrap",
				desc: "Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.",
				browsers: "all",
				restriction: "enum",
				values: [
					{
						name: "nowrap"
					},
					{
						name: "wrap"
					},
					{
						name: "wrap-reverse"
					}
				]
			},
			{
				name: "font-family",
				desc: "Specifies a prioritized list of font family names or generic family names. A user agent iterates through the list of family names until it matches an available font that contains a glyph for the character to be rendered.",
				browsers: "all",
				restriction: "font",
				values: [
					{
						name: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
					},
					{
						name: "Arial, Helvetica, sans-serif"
					},
					{
						name: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
					},
					{
						name: "'Courier New', Courier, monospace"
					},
					{
						name: "cursive"
					},
					{
						name: "fantasy"
					},
					{
						name: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
					},
					{
						name: "Georgia, 'Times New Roman', Times, serif"
					},
					{
						name: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
					},
					{
						name: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
					},
					{
						name: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
					},
					{
						name: "monospace"
					},
					{
						name: "sans-serif"
					},
					{
						name: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
					},
					{
						name: "serif"
					},
					{
						name: "'Times New Roman', Times, serif"
					},
					{
						name: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
					},
					{
						name: "Verdana, Geneva, Tahoma, sans-serif"
					}
				]
			},
			{
				name: "font-size",
				desc: "Indicates the desired height of glyphs from the font. For scalable fonts, the font-size is a scale factor applied to the EM unit of the font. (Note that certain glyphs may bleed outside their EM box.) For non-scalable fonts, the font-size is converted into absolute units and matched against the declared font-size of the font, using the same absolute coordinate space for both of the matched values.",
				browsers: "all",
				restriction: "length, percentage",
				values: [
					{
						name: "large"
					},
					{
						name: "larger"
					},
					{
						name: "medium"
					},
					{
						name: "small"
					},
					{
						name: "smaller"
					},
					{
						name: "x-large"
					},
					{
						name: "x-small"
					},
					{
						name: "xx-large"
					},
					{
						name: "xx-small"
					}
				]
			},
			{
				name: "font-style",
				desc: "Allows italic or oblique faces to be selected. Italic forms are generally cursive in nature while oblique faces are typically sloped versions of the regular face.",
				browsers: "all",
				restriction: "enum",
				values: [
					{
						name: "italic"
					},
					{
						name: "normal",
						desc: "Selects a face that is classified as 'normal'."
					},
					{
						name: "oblique"
					}
				]
			},
			{
				name: "font-weight",
				desc: "Specifies weight of glyphs in the font, their degree of blackness or stroke thickness.",
				browsers: "all",
				restriction: "enum",
				values: [
					{
						name: "100"
					},
					{
						name: "200"
					},
					{
						name: "300"
					},
					{
						name: "400"
					},
					{
						name: "500"
					},
					{
						name: "600"
					},
					{
						name: "700"
					},
					{
						name: "800"
					},
					{
						name: "900"
					},
					{
						name: "bold"
					},
					{
						name: "bolder"
					},
					{
						name: "lighter"
					},
					{
						name: "normal",
						desc: "Same as 400"
					}
				]
			},
			{
				name: "height",
				desc: "Specifies the height of the content area, padding area or border area (depending on 'box-sizing') of certain boxes.",
				browsers: "all",
				restriction: "length, percentage",
				values: [
					{
						name: "auto",
						desc: "The height depends on the values of other properties."
					}
				]
			},
			{
				name: "justify-content",
				desc: "Aligns flex items along the main axis of the current line of the flex container.",
				browsers: "all",
				restriction: "enum",
				values: [
					{
						name: "center",
						desc: "Flex items are packed toward the center of the line."
					},
					{
						name: "start"
					},
					{
						name: "end"
					},
					{
						name: "left",
						desc: "The items are packed flush to each other toward the left edge of the alignment container in the main axis."
					},
					{
						name: "right",
						desc: "The items are packed flush to each other toward the right edge of the alignment container in the main axis."
					},
					{
						name: "safe"
					},
					{
						name: "unsafe"
					},
					{
						name: "stretch",
						desc: "If the combined size of the alignment subjects is less than the size of the alignment container, any auto-sized alignment subjects have their size increased equally (not proportionally), while still respecting the constraints imposed by max-height/max-width (or equivalent functionality), so that the combined size exactly fills the alignment container."
					},
					{
						name: "space-evenly"
					},
					{
						name: "flex-end",
						desc: "Flex items are packed toward the end of the line."
					},
					{
						name: "flex-start",
						desc: "Flex items are packed toward the start of the line."
					},
					{
						name: "space-around"
					},
					{
						name: "space-between"
					},
					{
						name: "baseline",
						desc: "Specifies participation in first-baseline alignment."
					},
					{
						name: "first baseline"
					},
					{
						name: "last baseline"
					}
				]
			},
			{
				name: "left",
				desc: "Specifies how far an absolutely positioned box's left margin edge is offset to the right of the left edge of the box's 'containing block'.",
				browsers: "all",
				restriction: "length, percentage",
				values: [
					{
						name: "auto",
						desc: "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
					}
				]
			},
			{
				name: "letter-spacing",
				desc: "Specifies the minimum, maximum, and optimal spacing between grapheme clusters.",
				browsers: "all",
				restriction: "length",
				values: [
					{
						name: "normal",
						desc: "The spacing is the normal spacing for the current font. It is typically zero-length."
					}
				]
			},
			{
				name: "line-height",
				desc: "Determines the block-progression dimension of the text content area of an inline box.",
				browsers: "all",
				restriction: "number, length, percentage",
				values: [
					{
						name: "normal",
						desc: "Tells user agents to set the computed value to a 'reasonable' value based on the font size of the element."
					}
				]
			},
			{
				name: "margin",
				desc: "Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits.",
				browsers: "all",
				restriction: "length, percentage",
				values: [
					{
						name: "auto"
					}
				]
			},
			{
				name: "margin-bottom",
				desc: "Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..",
				browsers: "all",
				restriction: "length, percentage",
				values: [
					{
						name: "auto"
					}
				]
			},
			{
				name: "margin-left",
				desc: "Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..",
				browsers: "all",
				restriction: "length, percentage",
				values: [
					{
						name: "auto"
					}
				]
			},
			{
				name: "margin-right",
				desc: "Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..",
				browsers: "all",
				restriction: "length, percentage",
				values: [
					{
						name: "auto"
					}
				]
			},
			{
				name: "margin-top",
				desc: "Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..",
				browsers: "all",
				restriction: "length, percentage",
				values: [
					{
						name: "auto"
					}
				]
			},
			{
				name: "max-height",
				desc: "Allows authors to constrain content height to a certain range.",
				browsers: "all",
				restriction: "length, percentage",
				values: [
					{
						name: "none",
						desc: "No limit on the height of the box."
					}
				]
			},
			{
				name: "max-width",
				desc: "Allows authors to constrain content width to a certain range.",
				browsers: "all",
				restriction: "length, percentage",
				values: [
					{
						name: "none",
						desc: "No limit on the width of the box."
					}
				]
			},
			{
				name: "min-height",
				desc: "Allows authors to constrain content height to a certain range.",
				browsers: "all",
				restriction: "length, percentage"
			},
			{
				name: "min-width",
				desc: "Allows authors to constrain content width to a certain range.",
				browsers: "all",
				restriction: "length, percentage"
			},
			{
				name: "opacity",
				desc: "Opacity of an element's text, where 1 is opaque and 0 is entirely transparent.",
				browsers: "all",
				restriction: "number(0-1)"
			},
			{
				name: "overflow",
				desc: "Shorthand for setting 'overflow-x' and 'overflow-y'.",
				browsers: "all",
				restriction: "enum",
				values: [
					{
						name: "auto",
						desc: "The behavior of the 'auto' value is UA-dependent, but should cause a scrolling mechanism to be provided for overflowing boxes."
					},
					{
						name: "hidden",
						desc: "Content is clipped and no scrolling mechanism should be provided to view the content outside the clipping region."
					},
					{
						name: "scroll"
					},
					{
						name: "visible",
						desc: "Content is not clipped, i.e., it may be rendered outside the content box."
					}
				]
			},
			{
				name: "padding",
				desc: "Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
				browsers: "all",
				restriction: "length, percentage",
				values: []
			},
			{
				name: "padding-bottom",
				desc: "Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
				browsers: "all",
				restriction: "length, percentage"
			},
			{
				name: "padding-left",
				desc: "Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
				browsers: "all",
				restriction: "length, percentage"
			},
			{
				name: "padding-right",
				desc: "Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
				browsers: "all",
				restriction: "length, percentage"
			},
			{
				name: "padding-top",
				desc: "Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
				browsers: "all",
				restriction: "length, percentage"
			},
			{
				name: "position",
				browsers: "all",
				restriction: "enum",
				values: [
					{
						name: "absolute"
					},
					{
						name: "fixed"
					},
					{
						name: "relative"
					},
					{
						name: "static"
					}
				]
			},
			{
				name: "right",
				desc: "Specifies how far an absolutely positioned box's right margin edge is offset to the left of the right edge of the box's 'containing block'.",
				browsers: "all",
				restriction: "length, percentage",
				values: [
					{
						name: "auto",
						desc: "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
					}
				]
			},
			{
				name: "text-align",
				desc: "Describes how inline contents of a block are horizontally aligned if the contents do not completely fill the line box.",
				browsers: "all",
				restriction: "string",
				values: [
					{
						name: "center",
						desc: "The inline contents are centered within the line box."
					},
					{
						name: "justify"
					},
					{
						name: "left",
						desc: "The inline contents are aligned to the left edge of the line box. In vertical text, 'left' aligns to the edge of the line box that would be the start edge for left-to-right text."
					},
					{
						name: "right",
						desc: "The inline contents are aligned to the right edge of the line box. In vertical text, 'right' aligns to the edge of the line box that would be the end edge for left-to-right text."
					}
				]
			},
			{
				name: "text-decoration-color",
				desc: "Specifies the color of text decoration (underlines overlines, and line-throughs) set on the element with text-decoration-line.",
				browsers: "FF36,S,C57,O44",
				restriction: "color"
			},
			{
				name: "text-decoration-line",
				desc: "Specifies what line decorations, if any, are added to the element.",
				browsers: "FF36,S,C,O",
				restriction: "enum",
				values: [
					{
						name: "line-through"
					},
					{
						name: "none",
						desc: "Neither produces nor inhibits text decoration."
					},
					{
						name: "overline"
					},
					{
						name: "underline"
					}
				]
			},
			{
				name: "text-decoration-style",
				desc: "Specifies the line style for underline, line-through and overline text decoration.",
				browsers: "FF36,S,C57,O44",
				restriction: "enum",
				values: [
					{
						name: "dashed"
					},
					{
						name: "dotted"
					},
					{
						name: "double"
					},
					{
						name: "none",
						desc: "Produces no line."
					},
					{
						name: "solid"
					},
					{
						name: "wavy"
					}
				]
			},
			{
				name: "top",
				desc: "Specifies how far an absolutely positioned box's top margin edge is offset below the top edge of the box's 'containing block'.",
				browsers: "all",
				restriction: "length, percentage",
				values: [
					{
						name: "auto",
						desc: "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
					}
				]
			},
			{
				name: "transform",
				desc: "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
				browsers: "all",
				restriction: "enum",
				values: [
					{
						name: "matrix()"
					},
					{
						name: "matrix3d()"
					},
					{
						name: "none"
					},
					{
						name: "perspective()"
					},
					{
						name: "rotate()"
					},
					{
						name: "rotate3d()"
					},
					{
						name: "rotateX('angle')"
					},
					{
						name: "rotateY('angle')"
					},
					{
						name: "rotateZ('angle')"
					},
					{
						name: "scale()"
					},
					{
						name: "scale3d()"
					},
					{
						name: "scaleX()"
					},
					{
						name: "scaleY()"
					},
					{
						name: "scaleZ()"
					},
					{
						name: "skew()"
					},
					{
						name: "skewX()"
					},
					{
						name: "skewY()"
					},
					{
						name: "translate()"
					},
					{
						name: "translate3d()"
					},
					{
						name: "translateX()"
					},
					{
						name: "translateY()"
					},
					{
						name: "translateZ()"
					}
				]
			},
			{
				name: "width",
				desc: "Specifies the width of the content area, padding area or border area (depending on 'box-sizing') of certain boxes.",
				browsers: "all",
				restriction: "length, percentage",
				values: [
					{
						name: "auto",
						desc: "The width depends on the values of other properties."
					}
				]
			},
			{
				name: "z-index",
				desc: "For a positioned box, the 'z-index' property specifies the stack level of the box in the current stacking context and whether the box establishes a local stacking context.",
				browsers: "all",
				restriction: "integer",
				values: [
					{
						name: "auto",
						desc: "The stack level of the generated box in the current stacking context is 0. The box does not establish a new stacking context unless it is the root element."
					}
				]
			}
		]
	}
};
export const descriptions : any = {
	"100": "Thin",
	"200": "Extra Light (Ultra Light)",
	"300": "Light",
	"400": "Normal",
	"500": "Medium",
	"600": "Semi Bold (Demi Bold)",
	"700": "Bold",
	"800": "Extra Bold (Ultra Bold)",
	"900": "Black (Heavy)",
	"column": "The flex container’s main axis has the same orientation as the block axis of the current writing mode.",
	"column-reverse": "Same as 'column', except the main-start and main-end directions are swapped.",
	"row": "The flex container’s main axis has the same orientation as the inline axis of the current writing mode.",
	"row-reverse": "Same as 'row', except the main-start and main-end directions are swapped.",
	"nowrap": "The flex container is single-line.",
	"wrap": "The flexbox is multi-line.",
	"wrap-reverse": "Same as 'wrap', except the cross-start and cross-end directions are swapped.",
	"italic": "Selects a font that is labeled as an 'italic' face, or an 'oblique' face if one is not",
	"oblique": "Selects a font that is labeled as an 'oblique' face, or an 'italic' face if one is not.",
	"bold": "Same as 700",
	"bolder": "Specifies the weight of the face bolder than the inherited value.",
	"lighter": "Specifies the weight of the face lighter than the inherited value.",
	"start": "The items are packed flush to each other toward the start edge of the alignment container in the main axis.",
	"end": "The items are packed flush to each other toward the end edge of the alignment container in the main axis.",
	"safe": "If the size of the item overflows the alignment container, the item is instead aligned as if the alignment mode were start.",
	"unsafe": "Regardless of the relative sizes of the item and alignment container, the given alignment value is honored.",
	"space-evenly": "The items are evenly distributed within the alignment container along the main axis.",
	"space-around": "Flex items are evenly distributed in the line, with half-size spaces on either end.",
	"space-between": "Flex items are evenly distributed in the line.",
	"first baseline": "Specifies participation in first-baseline alignment.",
	"last baseline": "Specifies participation in last-baseline alignment.",
	"scroll": "Content is clipped and if the user agent uses a scrolling mechanism that is visible on the screen (such as a scroll bar or a panner), that mechanism should be displayed for a box whether or not any of its content is clipped.",
	"absolute": "The box's position (and possibly size) is specified with the 'top', 'right', 'bottom', and 'left' properties. These properties specify offsets with respect to the box's 'containing block'.",
	"fixed": "The box's position is calculated according to the 'absolute' model, but in addition, the box is fixed with respect to some reference. As with the 'absolute' model, the box's margins do not collapse with any other margins.",
	"relative": "The box's position is calculated according to the normal flow (this is called the position in normal flow). Then the box is offset relative to its normal position.",
	"static": "The box is a normal box, laid out according to the normal flow. The 'top', 'right', 'bottom', and 'left' properties do not apply.",
	"justify": "The text is justified according to the method specified by the 'text-justify' property.",
	"line-through": "Each line of text has a line through the middle.",
	"overline": "Each line of text has a line above it.",
	"underline": "Each line of text is underlined.",
	"dashed": "Produces a dashed line style.",
	"dotted": "Produces a dotted line.",
	"double": "Produces a double line.",
	"solid": "Produces a solid line.",
	"wavy": "Produces a wavy line.",
	"matrix()": "Specifies a 2D transformation in the form of a transformation matrix of six values. matrix(a,b,c,d,e,f) is equivalent to applying the transformation matrix [a b c d e f]",
	"matrix3d()": "Specifies a 3D transformation as a 4x4 homogeneous matrix of 16 values in column-major order.",
	"perspective()": "Specifies a perspective projection matrix.",
	"rotate()": "Specifies a 2D rotation by the angle specified in the parameter about the origin of the element, as defined by the transform-origin property.",
	"rotate3d()": "Specifies a clockwise 3D rotation by the angle specified in last parameter about the [x,y,z] direction vector described by the first 3 parameters.",
	"rotateX('angle')": "Specifies a clockwise rotation by the given angle about the X axis.",
	"rotateY('angle')": "Specifies a clockwise rotation by the given angle about the Y axis.",
	"rotateZ('angle')": "Specifies a clockwise rotation by the given angle about the Z axis.",
	"scale()": "Specifies a 2D scale operation by the [sx,sy] scaling vector described by the 2 parameters. If the second parameter is not provided, it is takes a value equal to the first.",
	"scale3d()": "Specifies a 3D scale operation by the [sx,sy,sz] scaling vector described by the 3 parameters.",
	"scaleX()": "Specifies a scale operation using the [sx,1] scaling vector, where sx is given as the parameter.",
	"scaleY()": "Specifies a scale operation using the [sy,1] scaling vector, where sy is given as the parameter.",
	"scaleZ()": "Specifies a scale operation using the [1,1,sz] scaling vector, where sz is given as the parameter.",
	"skew()": "Specifies a skew transformation along the X and Y axes. The first angle parameter specifies the skew on the X axis. The second angle parameter specifies the skew on the Y axis. If the second parameter is not given then a value of 0 is used for the Y angle (ie: no skew on the Y axis).",
	"skewX()": "Specifies a skew transformation along the X axis by the given angle.",
	"skewY()": "Specifies a skew transformation along the Y axis by the given angle.",
	"translate()": "Specifies a 2D translation by the vector [tx, ty], where tx is the first translation-value parameter and ty is the optional second translation-value parameter.",
	"translate3d()": "Specifies a 3D translation by the vector [tx,ty,tz], with tx, ty and tz being the first, second and third translation-value parameters respectively.",
	"translateX()": "Specifies a translation by the given amount in the X direction.",
	"translateY()": "Specifies a translation by the given amount in the Y direction.",
	"translateZ()": "Specifies a translation by the given amount in the Z direction. Note that percentage values are not allowed in the translateZ translation-value, and if present are evaluated as 0."
};