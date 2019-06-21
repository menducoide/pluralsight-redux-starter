/*eslint-disable no-console */
import webpack from 'webpack';
import webPackConfig from '../webpack.config.prod';
import colors from 'colors';
 
process.env.NODE_ENV = 'production'; // this assures the Babel dev coonfig (for hot reloading)

console.log('Generating minified bundle for production via WebPack. This will take a moment . . . '.blue);

webpack(webPackConfig).run((err,stats) => {
    if(err){ //so a fatal error ocurred. Stop here
        console.log(err.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(e=>console.log(e));        
    }

    if(jsonStats.hasWarnings){
        console.log('Webpack generated the following warnings : '.bold.yellow);
        jsonStats.warnings.map(w=>console.log(w.yellow));
    }
    console.log(`Webpack stats : ${stats}`);

    // if we got this far, the build succeded.
    console.log('Your app has been compiled in production mode an witten to /dis. It\'s read to roll'.green);

    return 0;
});