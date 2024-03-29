var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],         //toggled button
    ["blockquote"],

    [{'header': 1}, {'header': 2}],                     //Custom button
    [{'list': 'ordered'}, {'list': 'bullet'}],          
    [{'script': 'sub'}, {'script':'super'}],            //superscript/subscript
    [{'indent': '-1'}, {'indent': '+1'}],               //outdent/indent
    [{'direction': 'rtl'}] ,                            //text direction

    //[{'size:['small', false, 'large', 'huge']}],       //custom dropdown
    [{'header': [1,2,3,4,5,6, false]}],

    [{'color':[] }, {'background': [] }],                  //dropdown with defaults from theme
    [{'font': [] }],
    [{'align':[] }],

    ['clean']                                            // remove formatting button
];

export const modules = {
    toolbar: toolbarOptions
};
