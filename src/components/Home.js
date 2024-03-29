const Home = () => {
	return (
		<section id="home">
			<div className="container">
				<div className="roww">
					{/* Main Title */}
					<div className="resumo_fn_main_title">
						<h3 className="subtitle">Introduction</h3>
						<h3 className="title">UI/UX Designer</h3>
						<p className="desc">
							I design and develop services for customers
							of all sizes, specializing in creating
							stylish, modern websites, web services and
							online stores.
						</p>
						<img src="img/signature.png" alt="image" />
					</div>
					{/* /Main Title */}
				</div>
			</div>
			<div className="scroll">
				<span className="text">SCROLL</span>
				<span className="arrow">&rarr;</span>
			</div>
		</section>
	);
};

export default Home;
