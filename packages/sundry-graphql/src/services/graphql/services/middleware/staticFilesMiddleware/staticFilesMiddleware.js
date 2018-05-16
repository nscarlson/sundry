import express, { Router } from 'express'

const staticFilesMiddleware = Router()

staticFilesMiddleware.use('/dist', express.static('dist'))
staticFilesMiddleware.use('/public', express.static('public'))

export default staticFilesMiddleware
