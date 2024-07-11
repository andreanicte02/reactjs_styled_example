export interface StepperListQ2{
    num: number
    status: 'current'|'view'|'pending'
}

export interface BrewMethodsQ2{
    img: string
    text:string
    color:string
    rotate:string
}

export const stepperListQ2: StepperListQ2[] =[
    {num:1, status:'view'},
    {num:2, status:'current'},
    {num:3, status:'pending'},
    {num:4, status:'pending'},
    {num:5, status:'pending'},
    {num:6, status:'pending'}
]

export const brewMethodsQ2:BrewMethodsQ2[]=[
    {img:'coffee-maker.png', text:'Coffee Maker', color:'#EEB426', rotate:"-12"},
    {img:'french-press.png', text:'French Press', color:'#9CAF96' ,rotate:"-8"},
    {img:'pour-over.png', text:'Pour Over', color:'#D4A1A6', rotate:'-4'},
    {img:'aeropress.png', text:'AeroPress', color:'#DA8464' ,rotate:'0'},
    {img:'espresso.png', text:'Espresso', color:'#A9C9E1', rotate:'+4'},
    {img:'pods.png', text:'Pods', color:'#C47D30', rotate:'+8'},
    {img:'moka-pot.png', text:'Moka Pot', color:'#D2C6C3', rotate:'+12'}
]