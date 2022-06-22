
const ChessImageGenerator = require(".");

const imageGenerator = new ChessImageGenerator({
	padding: [44, 44, 44, 44],
	size: 512,
	light: '#fff8e0',
	dark: '#827a62',
	style: "cburnett",
});

// const fen = `r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 1`;
// imageGenerator.loadFEN(fen);

const base_test = [
	"rnbqkbnr",
	"pppppppp",
	"        ",
	"        ",
	"        ",
	"        ",
	"PPPPPPPP",
	"RNBQKBNR",
].map(s => s.split(""));

const check_and_last_move_test = [
	"r  q rk ",
	"ppp  ppQ",
	"  n p   ",
	"   p    ",
	"  PP  n ",
	"p N P P ",
	" P   PP ",
	"R   K NR"
].map(s => s.split(""));

imageGenerator.loadArray(check_and_last_move_test);
imageGenerator.highlightSquares([{
	coord: "h7",
	color: "#a2dedc66"
}, {
	coord: "d3",
	color: "#a2dedc66"
}, {
	coord: "g8",
	color: "#f04f4f66"
}])


imageGenerator.generatePNG("test.png");
