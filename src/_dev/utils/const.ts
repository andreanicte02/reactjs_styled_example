export interface IStepMock {
    num: number
    status: 'current'|'view'|'pending'
}

export interface BrewMethodsQ2{
    img: string
    text:string
    color:string
    rotate:number,
    translateY:string,
}

export const stepperListQ2: IStepMock[] =[
    {num:1, status:'view'},
    {num:2, status:'current'},
    {num:3, status:'pending'},
    {num:4, status:'pending'},
    {num:5, status:'pending'},
    {num:6, status:'pending'}
]

export const stepperListResults: IStepMock[] =[
    {num:1, status:'view'},
    {num:2, status:'view'},
    {num:3, status:'view'},
    {num:4, status:'view'},
    {num:5, status:'view'},
    {num:6, status:'view'}
]


export const brewMethodsQ2:BrewMethodsQ2[]=[
    {img:'/media/coffee-maker.png', text:'Coffee Maker', color:'#EEB426', rotate:-12, translateY:"52"},
    {img:'/media/french-press.png', text:'French Press', color:'#9CAF96' ,rotate:-8, translateY:"22"},
    {img:'/media/pour-over.png', text:'Pour Over', color:'#D4A1A6', rotate:-4,translateY:"6"},
    {img:'/media/aeropress.png', text:'AeroPress', color:'#DA8464' ,rotate:0,translateY:'0'},
    {img:'/media/espresso.png', text:'Espresso', color:'#A9C9E1', rotate:4,translateY:"6"},
    {img:'/media/pods.png', text:'Pods', color:'#C47D30', rotate:8, translateY:"22"},
    {img:'/media/moka-pot.png', text:'Moka Pot', color:'#D2C6C3', rotate:12, translateY:"52"}
]