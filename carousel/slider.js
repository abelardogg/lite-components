let slider = function(config){
	
	this.sliderBody = config.sliderBody;
	this.elQuantity = this.sliderBody.querySelectorAll('.slider-el').length;
	this.scrollAmount = this.sliderBody.offsetWidth;
	this.currentIndex = 1;
	this.currentPosition = 0;
	
	console.log(this.elQuantity)
	console.log(this.scrollAmount)
	this.init = function(){
		let self = this;
		
		console.log()
		console.log('init slider')
		let $nextButton = document.getElementsByClassName('slider-controls-next')[0];
		let $previousButton = document.getElementsByClassName('slider-controls-previous')[0];

		$nextButton.addEventListener('click', function(e){
			const $slider = document.getElementById(this.dataset.target);
			self.nextSlide($slider)
		});
		
		$previousButton.addEventListener('click', function(e){
			const $slider = document.getElementById(this.dataset.target);
			self.previousSlide($slider)
		});
	}
	
	this.nextSlide = function($slider){
		let self = this;
		if(self.currentIndex < self.elQuantity){
			$slider.scroll({
				left: $slider.offsetWidth * self.currentIndex,
				behavior: "smooth"
			})
			console.log(`scrolled to: ${$slider.scrollLeft}`)
			self.currentIndex += 1;
		} else {
			$slider.scroll({
				left: 0,
				behavior: "smooth"
			})
			self.currentIndex = 1;

		}
	};
	
	this.previousSlide =  function($slider){
		let self = this;
		if(self.currentIndex > 1){ // 1 because is the first image.
			$slider.scroll({
				left: $slider.scrollLeft - $slider.offsetWidth,
				behavior: "smooth"
			})
			console.log(`scrolled to: ${$slider.scrollLeft}`)
			self.currentIndex -= 1;
		} else {
			$slider.scroll({
				left: $slider.offsetWidth * self.elQuantity,
				behavior: "smooth"
			})
			self.currentIndex = self.elQuantity;
		}
		
	}
}

let sample = new slider({
	sliderBody: document.getElementById('test-slider')
});


sample.init()

