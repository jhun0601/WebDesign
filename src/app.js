const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
//define paths and express config
const publicDir = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
//set up handle bars and view location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
//set up static directory  serve
app.use(express.static(publicDir))
app.get('',(req, res) => {
    res.render('index', {
        title:'Panahon',
        name: 'Jhunmark',
        created_by: 'Jhunmark Ng'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title:'About',
        name: 'Chielo',
        created_by: 'Chielo Ng'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'This is a message',
        created_by: 'Chebie Ng'
    })
})
app.get('/panahon', (req, res) => {
    res.send([
        {
            forecast: 'It is windy today',
            location: 'Philippines'
        }
    ])
})
app.get('/help/*', (req, res) => {
    res.render('not_found', {
        message: 'help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404',{
        link:'/'
    })
})

app.listen(4000, () => {
    console.log('express start port 4000.')
})