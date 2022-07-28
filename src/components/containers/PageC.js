function PageContainer(props) {
    return (
        <div className="pt-3 pb-8">
            <div className="p-3-md p-1 u-flex u-flex-column u-gap-2 max-width mx-auto">
                {props.children}
            </div>
        </div>
    )
}

export default PageContainer