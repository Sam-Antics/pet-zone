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

