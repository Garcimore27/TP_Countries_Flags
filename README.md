# TP du 13/12/2023 - React
ENONCE:
# Vous allez devoir créer un site de recherche de Pays.

Pour ça, vous allez créer un formulaire de recherche avec un input de type texte et un button envoyer qui vous permettra d'afficher un ou plusieurs pays correspondant à votre recherche.

Si vous tapez "fr" dans la recherche, vous devez afficher la France, mais egalement "Afrique du Sud", "Territoire des Terres australes et antarctiques françaises" etc
Si vous ne tapez rien, alors rien ne s'affiche, car il y a beaucoup trop de pays...

Tous les pays doivent apparaitre en Francais (si possible), avec leur drapeau, leur continent et capitale

Lors du clic sur le pays, une nouvelle page s'ouvre avec en plus :
La liste des devises (nom et symbole)
Les différents langages
Tous les pays frontaliers 😈
et un lien gmap pour retrouver le pays

Ressource :
https://restcountries.com/


#################################################

# Endpoint permettant de récupérer toutes les informations demandées : 
https://restcountries.com/v3.1/all

# On obtient en retour un tableau d'objets dans lequel chaque objet est un pays qui dispose des propriétés qui nous intéressent suivantes :
Ci-dessous, l'exemple de l'île Christmas, 1er pays retourné par le endpoint https://restcountries.com/v3.1/all :

{
    #Si pas de nom français :
    "name": {
      "common": "Christmas Island"
    }

    #Devise
    "currencies": {
      "AUD": {
        "name": "Australian dollar",
        "symbol": "$"
      }
    }

    #Nom de la capitale
    "capital": [
      "Flying Fish Cove"
    ]

    #Continent
    "region": "Oceania"

    #Complément de continent
    "subregion": "Australia and New Zealand"

    #Langues
    "languages": {
      "eng": "English"
    }
    
    #Nom français du pays
    #Servira pour la recherche de caractères
    "translations": {
      "fra": {
        "official": "Territoire de l'île Christmas",
        "common": "Île Christmas"
      }
    }

    #Latitude & Longitude
    #Pour situer le pays sur une carte
    "latlng": [
      -10.5,
      105.66666666
    ]

    #Lien url permettant de lancer une fenêtre #GoogleMaps directement sur le pays en #question
    "maps": {
      "googleMaps": "https://goo.gl/maps/ZC17hHsQZpShN5wk9",
      "openStreetMaps": "https://www.openstreetmap.org/relation/6365444"
    }

    #Nb d'habitants
    "population": 2072

    #Url du drapeau du pays
    "flags": {
      "png": "https://flagcdn.com/w320/cx.png",
      "svg": "https://flagcdn.com/cx.svg"
    }

    #Latitude & longitude de la capitale
    "capitalInfo": {
      "latlng": [
        -10.42,
        105.68
      ]
    }
}

# Pour n'obtenir que les informations qui nous intéressent, nous pouvons effectuer un premier filtre en interrogeant une url qui ne spécifie que les champs de 1er niveau souhaités comme ceci :
https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,subregion,languages,translations,latlng,maps,population,flags,capitalInfo

Ceci permet d'obtenir un retour moins volumineux dès le départ et sera plus intéressant pour nos recherches dans le tableau de données qui nous est retourné.









# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
