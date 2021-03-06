//BOX ANIMATIONS!

export const upperBoxAnimDesktop = {
  init: {},
  final: {
    marginLeft: '85%',
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export const upperBoxAnim = {
  init: {},
  final: {
    marginLeft: '59%',
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export const bottomBoxAnim = {
  init: {},
  final: {
    marginLeft: '47%',
    width: '63%',
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export const bottomBoxAnimDesktop = {
  init: {},
  final: {
    marginLeft: '100%',
    width: '30%',
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export const grayBoxAnimDesktop = {
  init: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    visibility: 'visible',
    width: '15%',
    marginLeft: '85%',
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export const grayBoxAnim = {
  init: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    width: '19%',
    marginLeft: '59%',
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

//TEXT ANIMATIONS!

export const textAnim = {
  init: { y: 100 },
  final: { y: 0, transition: { delay: 0.6, duration: 1 } },
};

export const textStackAnim = {
  init: {},
  final: {
    opacity: 1,
    visibility: 'visible',
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      delay: 0.05,
    },
  },
};

export const headingListAnim = {
  init: {},
  final: {
    visibility: 'visible',
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
      // duration: 2.2,
    },
  },
};

export const bottomHeadingListAnim = {
  init: {},
  final: {
    visibility: 'visible',
    opacity: 1,
    transition: {
      delayChildren: 0.65,
      staggerChildren: 0.1,
      // duration: 2.2,
    },
  },
};

export const headingAnim = {
  init: {
    opacity: 0,
    y: 50,
  },
  final: {
    opacity: 1,
    y: 0,
    transition: { y: { duration: 0.75, type: 'tween' } },
  },
};

export const heartAnim = {
  init: { opacity: 0, y: 50 },
  final: {
    opacity: 1,
    y: 0,
    fill: [
      '#FF1A3E',
      '#00174f',
      '#FF1A3E',
      '#FF1A3E',
      '#FF1A3E',
      '#00174f',
      '#FF1A3E',
      '#00174f',
      '#FF1A3E',
    ],
    x: [0, 10, 0, 0, 0, 10, 0, 10, 0],
    transition: {
      y: { duration: 0.75, type: 'tween' },
      fill: {
        repeat: 1,
        repeatType: 'loop',
        repeatDelay: 1.8,
        times: [0, 0.02, 0.04, 0.8, 0.82, 0.84, 0.86, 0.88, 0.9],
        duration: 2.8,
        delay: 1.55,
        type: 'spring',
      },
      x: {
        repeat: 1,
        repeatType: 'loop',
        repeatDelay: 1.8,
        times: [0, 0.02, 0.04, 0.8, 0.82, 0.84, 0.86, 0.88, 0.9],
        duration: 2.8,
        delay: 1.55,
        type: 'spring',
      },
    },
  },
};
