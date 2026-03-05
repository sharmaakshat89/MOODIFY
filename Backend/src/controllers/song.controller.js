const songModel=require('../models/song.model')
const id3=require('node-id3') // gives us complete detail of files we are uploading
const storageService=require('../services/storage.services')


async function uploadSong(req,res){

    const songBuffer= req.files.buffer //  multer provides this buffer, then stored in songBuffer
    const tags=id3.read(songBuffer)// id3 reads this buffer and converts it to readable data, tags contains the whole data
    const mood= req.body

    const songFile= await storageService.uploadFile({
        buffer:songBuffer,
        filename:tage.title + '.mp3',
        folder:'/cohort-2/moodify/songs'
    })

    const posterFile= await storageService.uploadFile({
        buffer:tags.image.imageBuffer,
        filename:tage.title+ '.jpeg',
        folder:'/cohort-2/moodify/posters'
    })
    
    const song= await songModel.create({
        url:songFile.url,
        posterUrl:posterFile.url,
        title:tags.title,
        mood:mood
    })

    res.status(201).json({
        message:'song created successfully',
        song
    })
}


async function getSong(req,res){

    const mood= req.query

    const song= await songModel.findOne({
        mood
    })

    res.status(200).json({
        message:'song fetched',
        song
    })
 }

module.exports={uploadSong}