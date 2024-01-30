const P4Home = () => {
    const jsxCodeArray = [
        { name: "<Routes>", classes: 'ml-0' },
        { name: "    <Route path='/' element={<Outlet />} >", classes: 'ml-8' },
        { name: "    <Route path='home' element={<P4Home />} />", classes: 'ml-16' },
        { name: "        <Route path='about' element={<P4ABout />} >", classes: 'ml-16' },
        { name: "            <Route path='loremtext' element={<P4Lorem data={<Lorem/>} />} />", classes: 'ml-24' },
        { name: "            <Route path='randomtext' element={<P4Lorem data={<RandomQuote/ >} />} />", classes: 'ml-24' },
        { name: "        </Route>", classes: 'ml-16' },
        { name: "    <Route path='contact' element={<P4Contact />} />", classes: 'ml-16' },
        { name: "    <Route path='greeting' element={<Greeting/>}", classes: 'ml-16' },
        { name: "</Route>", classes: 'ml-8' },
        { name: "    <Route path='/dashboard'>", classes: 'ml-8' },
        { name: "        <Route index element={<Dashboard/>} >", classes: 'ml-16' },
        { name: "        <Route path='create' element={<CreateUser />}", classes: 'ml-16' },
        { name: "        <Route path='update' element={<UpdateUser />}", classes: 'ml-16' },
        { name: "        <Route path='delete' element={<DeleteUser />}", classes: 'ml-16' },
        { name: "    </Route>", classes: 'ml-8' },
        { name: "</Routes>", classes: 'ml-0' },
    ];


    return (
        <div className="bg-gray-800 text-slate-300 flex flex-col ml- items-center font-semibold p-2">
            <h1 className="mx-auto">This is a nested routing application where you can navigate through anything</h1>
            <div>
                <h2 className="text-center text-xl font-semibold">Routes</h2>
                <div className="flex flex-col border-black  border-2 p-2">

                    {jsxCodeArray.map((element) => (
                        <div className={` ${element.classes !== 'ml-0' ? element.classes : 'ml-0'} `} key={element.name}>{element.name}</div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default P4Home
