import firebase from 'firebase'

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
}

firebase.initializeApp(config)

export default class FirebaseService {

    static getFullName = async () => {
        const dbRef = firebase.database().ref()
        var full_name = ""

        await dbRef.child("General").child("full_name").get()
            .then((snapshot) => {
                full_name = snapshot.val()
            }).catch((error) => {
                console.log(error)
        })

        return full_name
    }

    static getName = async () => {
        const dbRef = firebase.database().ref()
        var name = ""

        await dbRef.child("General").child("name").get()
            .then((snapshot) => {
                name = snapshot.val()
            }).catch((error) => {
                console.log(error)
        })

        return name
    }

    static getNumberPhone = async () => {
        const dbRef = firebase.database().ref()
        var number_phone = ""

        await dbRef.child("General").child("number_phone").get()
            .then((snapshot) => {
                number_phone = snapshot.val()
            }).catch((error) => {
                console.log(error)
        })

        return number_phone
    }

    static getOccupation = async () => {
        const dbRef = firebase.database().ref()
        var occupation = ""

        await dbRef.child("General").child("occupation").get()
            .then((snapshot) => {
                occupation = snapshot.val()
            }).catch((error) => {
                console.log(error)
        })

        return occupation
    }

    static getEmail = async () => {
        const dbRef = firebase.database().ref()
        var email = ""

        await dbRef.child("General").child("email").get()
            .then((snapshot) => {
                email = snapshot.val()
            }).catch((error) => {
                console.log(error)
        })

        return email
    }

    static getAbout = async () => {
        const dbRef = firebase.database().ref()
        var about = ""

        await dbRef.child("General").child("about").get()
            .then((snapshot) => {
                about = snapshot.val()
            }).catch((error) => {
                console.log(error)
        })

        return about
    }

    static getLinkedin = async () => {
        const dbRef = firebase.database().ref()
        var linkedin = ""

        await dbRef.child("General").child("linkedin").get()
            .then((snapshot) => {
                linkedin = snapshot.val()
            }).catch((error) => {
                console.log(error)
        })

        return linkedin
    }

    static getGithub = async () => {
        const dbRef = firebase.database().ref()
        var github = ""

        await dbRef.child("General").child("github").get()
            .then((snapshot) => {
                github = snapshot.val()
            }).catch((error) => {
                console.log(error)
        })

        return github
    }

    static getExperiences = async () => {
        const dbRef = firebase.database().ref()
        let experiences = []

        await dbRef.child("Experience").get()
            .then((snapshot) => {
                experiences.push(snapshot.val())
            }).catch((error) => {
                console.log(error)
        })

        return experiences[0]
    }

    static getFormations = async () => {
        const dbRef = firebase.database().ref()
        let formations = []

        await dbRef.child("Formation").get()
            .then((snapshot) => {
                formations.push(snapshot.val())
            }).catch((error) => {
                console.log(error)
        })

        return formations[0]
    }

    static getProjects = async () => {
        const dbRef = firebase.database().ref()
        let projects = []

        await dbRef.child("Projects").get()
            .then((snapshot) => {
                projects.push(snapshot.val())
            }).catch((error) => {
                console.log(error)
        })

        return projects[0]
    }

    static getPosts = async () => {
        const dbRef = firebase.database().ref()
        let posts = []

        await dbRef.child("Blog").get()
            .then((snapshot) => {
                posts.push(snapshot.val())
            }).catch((error) => {
                console.log(error)
        })

        return posts[0]
    }
}
