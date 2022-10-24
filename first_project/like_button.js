function MyComponent() {
    return React.createElement(
        "button",
        {
            onClick: ()=>alert('ok'),
            style:{
                backgroundColor:'red'
            },
        },
        "Pressione"
    )
}

const domContainer = document.querySelector("#like_button_container");
const root = ReactDOM.createRoot(domContainer);

root.render(MyComponent());