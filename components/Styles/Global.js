import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://p.typekit.net/p.css?s=1&k=ezq3zbz&ht=tk&f=18058.18059.18060.18065.14584.14585.14586.14587.9869.9870.9871.9872.9873.9874.9875.9876.14600.14601.14602.14603.18099.18100.18101.18106.18182.18183.18184.18189.18138.18139.18140.18145.18168.18169.18170.18175.18209.18210.18211.18212.18338.18339.18340.18345.18350.18351.18352.18357.18288.18289.18290.18295.18021.18022.18023.18028.18046.18047.18048.18053.18126.18127.18128.18133.39488.39489.39490.39491.39492.39493.39494.39495.39496.39497.39498.39499.39500.39501.39502.39504.39505.39508.39509&a=55010927&app=typekit&e=css');

.container {
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	/* align-items: stretch; */
	margin: auto;
	background-color: #f8f8f8;
	width: 100%;
	max-width: 100vw;
}


.main {
	min-height: 100vh;
	padding: 4rem 0;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.footer {
	display: flex;
	flex: 1;
	padding: 2rem 0;
	border-top: 1px solid #eaeaea;
	justify-content: center;
	align-items: center;
}

.footer a {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
}

.title a {
	color: #0070f3;
	text-decoration: none;
}

.title a:hover,
.title a:focus,
.title a:active {
	text-decoration: underline;
}

.title {
	margin: 0;
	line-height: 1.15;
	font-size: 4rem;
}

.title,
.description {
	text-align: center;
}

.description {
	margin: 4rem 0;
	line-height: 1.5;
	font-size: 1.5rem;
}

.code {
	background: #fafafa;
	border-radius: 5px;
	padding: 0.75rem;
	font-size: 1.1rem;
	font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
		Bitstream Vera Sans Mono, Courier New, monospace;
}

.grid {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	max-width: 800px;
}

.card {
	margin: 1rem;
	padding: 1.5rem;
	text-align: left;
	color: inherit;
	text-decoration: none;
	border: 1px solid #eaeaea;
	border-radius: 10px;
	transition: color 0.15s ease, border-color 0.15s ease;
	max-width: 300px;
}

.card:hover,
.card:focus,
.card:active {
	color: #0070f3;
	border-color: #0070f3;
}

.card h2 {
	margin: 0 0 1rem 0;
	font-size: 1.5rem;
}

.card p {
	margin: 0;
	font-size: 1.25rem;
	line-height: 1.5;
}

.logo {
	height: 1em;
	margin-left: 0.5rem;
}

@media (max-width: 600px) {
	.grid {
		width: 100%;
		flex-direction: column;
	}
}


`;

export default GlobalStyles;
