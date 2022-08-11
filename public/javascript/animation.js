//slides the animals across the screen
anime({
    targets: '.square',
    keyframes: [
        {translateX: 1020},
        {rotateY: 180},
        {translateX: 0},
        {rotateY: 0}
      ],
    easing: 'linear',
    loop: true,
    duration: 12000
});


//this allow images to jump up and down on the screen
anime({
  targets: '.tiny-square',
  keyframes: [
    // {delay: 1000},
    {translateY: -400},
    {translateY: 0}
  ],
  easing: 'easeInOutSine',
  loop: true,
  duration: 10000
})

