console.log('hello');


const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    },
    {
        name: 'Abdul Raffay',
        age: 20,
        city: 'karachi',
        language: 'Javascipt',
        framework: 'Angular',
        image: 'https://instagram.fkhi6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/76742572_861269574312242_721165763943071744_n.jpg?_nc_ht=instagram.fkhi6-1.fna.fbcdn.net&_nc_ohc=oQ03JCKbT8oAX9uw4xE&oh=c4253b59dd3a1f570163dfb966c0c213&oe=5EDBA40D'
    }
]
function cvIterator(profiles) {
    let index=0
    return {
        next:function () {
            if (index<profiles.length) {
                return {
                    value:profiles[index++],
                    done:false
                }
            }
            else{
                return {done:true}
            }
        }
    }
}
const candidates=cvIterator(data)

nextCv();
const next = document.getElementById('next')
next.addEventListener('click',nextCv)
function nextCv() {
    const nextCandidate=candidates.next().value;
    let image=document.getElementById('image')
    let profile=document.getElementById('profile')
    if (nextCandidate != undefined) {
        image.innerHTML = `<img src="${nextCandidate.image}">`
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: ${nextCandidate.name}</li>
        <li class="list-group-item">${nextCandidate.age} years old</li>
        <li class="list-group-item">Lives in ${nextCandidate.city}</li>
        <li class="list-group-item">Primarily works on ${nextCandidate.language}</li>
        <li class="list-group-item">Uses ${nextCandidate.framework} framework</li>
        </ul>`
    }
    else{
        alert('list of candidates is ended');
        window.location.reload();

    }


}

// // CV Iterator
// function cvIterator(profiles){
//     let nextIndex=0;
//     return {
//         next: function(){
//             return nextIndex<profiles.length ?
//             {value: profiles[nextIndex++], done: false} :
//             {done: true}
//         }
//     };
// }
// const candidates = cvIterator(data);

// nextCV();
// // Button listener for next button
// const next = document.getElementById('next');
// next.addEventListener('click', nextCV);


// function nextCV(){
//     const currentCandidate = candidates.next().value;
//     let image = document.getElementById('image');
//     let profile = document.getElementById('profile');
//     if(currentCandidate != undefined){
//     image.innerHTML = `<img src='${currentCandidate.image}'>`;
//     profile.innerHTML = `<ul class="list-group">
//     <li class="list-group-item">Name: ${currentCandidate.name}</li>
//     <li class="list-group-item">${currentCandidate.age} years old</li>
//     <li class="list-group-item">Lives in ${currentCandidate.city}</li>
//     <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
//     <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
//   </ul>`;
//     }
//     else{
//         alert('End of candidate applications');
//         window.location.reload();
//     }

// }
