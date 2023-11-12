function showInfo(menuNumber) {

    for (let i = 1; i <= 4; i++) {
        document.getElementById('info' + i).style.display = 'none';
    }
    document.getElementById('info' + menuNumber).style.display = 'block';
  
   
  }
  // slide show sản phẩm
  var currentIndex = 0;
  var slideWidth = 300; 
  var numSlides = document.querySelectorAll('.news-item').length;
  
  var prevButton = document.getElementById('prevButton');
  var nextButton = document.getElementById('nextButton');
  var sliderContent = document.querySelector('.other-product2');
  
  prevButton.addEventListener('click', function() {
      currentIndex--;
      if (currentIndex < 0) {
          currentIndex = numSlides - 1;
      }
      updateSlider();
  });
  
  nextButton.addEventListener('click', function() {
      currentIndex++;
      if (currentIndex >= numSlides) {
          currentIndex = 0;
      }
      updateSlider();
  });
  
  function updateSlider() {
      var offsetX = -currentIndex * slideWidth;
      sliderContent.style.transform = 'translateX(' + offsetX + 'px)';
  }

  let amountElement = document.getElementById('amount');
let amount = amountElement.value;
// console.log(amount);
let render = (amount) =>   {
    amountElement.value = amount
}
// Handle Plus
let handlePlus = () =>{
    console.log(amount);
    amount++
    render(amount);
}

//Handle Minus
let handleMinus = () =>{
    console.log(amount);
    if (amount > 1)
    amount--;
    render(amount);
}

amountElement.addEventListener('input', ()=>{
    console.log(amount);
    amount = amountElement.value;
    amount = parseInt(amount);
    amount = (isNaN(amount)|| amount==0)?1:amount;
    render(amount);
    console.log(amount);
})
