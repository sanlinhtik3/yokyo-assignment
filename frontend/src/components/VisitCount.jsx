const VisitCount = () => {
    return (
        <>
            <div className="w-full bg-white rounded-2xl dark:bg-gray-800 dark:border-gray-700 text-start">
                <div id="fullWidthTabContent" className="">
                    <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                        <dl className="grid grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-4 sm:p-8">
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                                <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                                <dd className="text-gray-500 dark:text-gray-400">Users</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
                                <dd className="text-gray-500 dark:text-gray-400">Videos</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">90+</dt>
                                <dd className="text-gray-500 dark:text-gray-400">Top Forbes companies</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

        </>
    )
}

export default VisitCount