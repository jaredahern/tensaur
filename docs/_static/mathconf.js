MathJax.Hub.Config({
  TeX: {
    Macros: {
      point:  ['\\mathrm{#1}', 1],
      scal:   ['{#1}', 1],
      vect:   ['\\boldsymbol{#1}', 1],
      tens:   ['\\boldsymbol{\\mathrm{#1}}', 1],
      ttens:  ['\\mathbb{#1}', 1],
      tttens: ['\\boldsymbol{\\mathscr{#1}}', 1],
    }
  }
});
