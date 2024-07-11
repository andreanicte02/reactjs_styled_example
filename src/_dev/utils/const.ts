export interface StepperListQ2{
    num: number
    status: 'current'|'view'|'pending'
}
export const stepperListQ2: StepperListQ2[] =[
    {num:1, status:'view'},
    {num:2, status:'current'},
    {num:3, status:'pending'},
    {num:4, status:'pending'},
    {num:5, status:'pending'},
    {num:6, status:'pending'}
]