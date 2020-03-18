# Preprocessed CSS (LESS) - DGM 2780

## Preprocessing Requirements
* Utilize imports so that only one file is compiled from at least 4 imported files

    Imports can be found in less/[index.less](https://github.com/lbuibel/DGM-2780-LESS/blob/master/website/less/index.less)

* Utilize variables for a font stack and colors

    Variables are located in less/[var.less](https://github.com/lbuibel/DGM-2780-LESS/blob/master/website/less/var.less)

- Nest your selectors so that they match the HTML structure

    Nesting occurs in these files:
    - [card.less](https://github.com/lbuibel/DGM-2780-LESS/blob/master/website/less/card.less)
    - [container.less](https://github.com/lbuibel/DGM-2780-LESS/blob/master/website/less/container.less)
    - [footer.less](https://github.com/lbuibel/DGM-2780-LESS/blob/master/website/less/footer.less)
    - [form.less](https://github.com/lbuibel/DGM-2780-LESS/blob/master/website/less/form.less)
    - [nav.less](https://github.com/lbuibel/DGM-2780-LESS/blob/master/website/less/nav.less)

* Create and use 2 unique mixins of your choice

    See [mixins](https://github.com/lbuibel/DGM-2780-LESS/blob/master/website/less/mixins.less)

* Create a mixin that creates a custom button using parameters.  Apply these styles on the buttons you created in HTML for the home and services page

    Lines 5-17 in the [mixins](https://github.com/lbuibel/DGM-2780-LESS/blob/master/website/less/mixins.less) file

* Create a mobile version of the home and secondary pages using escaped variables.  You can simply stack your content on top of itself, nothing complex is expected

    Lines 19 & 20 in the [var.less](https://github.com/lbuibel/DGM-2780-LESS/blob/master/website/less/var.less)


Website homepage was based on: [Sundance-Spa](https://www.sundanceresort.com/spa/)
Netlify Link - [Calm-Spa](https://dgm2780-less-logan-uibel.netlify.com/website/about.html)