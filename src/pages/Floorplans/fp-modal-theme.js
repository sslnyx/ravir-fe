export const fpTheme = {
    dialog: {
        defaultProps: {
            size: "xl",
            dismiss: {},
            animate: {
                unmount: {},
                mount: {},
            },
            className: "",
        },
        valid: {
            sizes: ["xs", "sm", "md", "lg", "xl", "xxl"],
        },
        styles: {
            base: {
                backdrop: {
                    display: "grid",
                    placeItems: "place-items-center",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "w-screen",
                    height: "h-[100svh] overflow-auto",
                    backgroundColor: "bg-black",
                    backgroundOpacity: "bg-opacity-60",
                    backdropFilter: "backdrop-blur-sm",
                },
                container: {
                    position: "relative",
                    p: "p-0",
                    borderRadius: "rounded-none",
                    boxShadow: "shadow-none",
                    color: "text-brown",
                    fontSmoothing: "antialiased",
                    fontFamily: "font-sans",
                    fontSize: "text-base",
                    fontWeight: "font-light",
                    lineHeight: "leading-relaxed",
                    backgroundColor: "bg-transparent"
                },
            },
            sizes: {
                xs: {
                    width: "w-full md:w-3/5 lg:w-2/5 2xl:w-1/4",
                    minWidth: "min-w-[80%] md:min-w-[60%] lg:min-w-[40%] 2xl:min-w-[25%]",
                    maxWidth: "max-w-[80%] md:max-w-[60%] lg:max-w-[40%] 2xl:max-w-[25%]",
                    m: "m-0",
                },
                sm: {
                    width: "w-full md:w-2/3 lg:w-2/4 2xl:w-1/3",
                    minWidth:
                        "min-w-[80%] md:min-w-[66.666667%] lg:min-w-[50%] 2xl:min-w-[33.333333%]",
                    maxWidth:
                        "max-w-[80%] md:max-w-[66.666667%] lg:max-w-[50%] 2xl:max-w-[33.333333%]",
                },
                md: {
                    width: "w-full md:w-3/4 lg:w-3/5 2xl:w-2/5",
                    minWidth: "min-w-[90%] md:min-w-[75%] lg:min-w-[60%] 2xl:min-w-[40%]",
                    maxWidth: "max-w-[90%] md:max-w-[75%] lg:max-w-[60%] 2xl:max-w-[40%]",
                },
                lg: {
                    width: "w-full md:w-5/6 lg:w-3/4 2xl:w-3/5",
                    minWidth:
                        "min-w-[90%] md:min-w-[83.333333%] lg:min-w-[75%] 2xl:min-w-[60%]",
                    maxWidth:
                        "max-w-[90%] md:max-w-[83.333333%] lg:max-w-[75%] 2xl:max-w-[60%]",
                },
                xl: {
                    width: "w-auto md:w-auto 2xl:w-auto",
                    minWidth: "min-w-auto md:min-w-auto 2xl:min-w-auto",
                    maxWidth: "max-w-[calc(100vw-30px)] md:max-w-[calc(100vw-30px)] 2xl:max-w-[1200px]",
                    height: "xl:h-[95%]",
                    minHeight: "xl:min-h-[500px]",
                    maxHeight: "xl:max-h-[95%]",
                    m: "m-3"
                },
                xxl: {
                    display: "flex",
                    flexDirection: "flex-col",
                    width: "w-screen",
                    minWidth: "min-w-[100vw]",
                    maxWidth: "max-w-[100vw]",
                    height: "h-screen",
                    minHeight: "min-h-[100vh]",
                    maxHeight: "max-h-[100vh]",
                    m: "m-0",
                    borderRadius: "rounded-none",
                },
            },
        },
    },
    dialogBody: {
        defaultProps: {
            className: "!p-0",
            divider: false,
        },
        styles: {
            base: {
                initial: {
                    position: "relative",
                    p: "p-0",
                    color: "text-brown",
                    fontSmoothing: "antialiased",
                    fontFamily: "font-sans",
                    fontSize: "text-base",
                    fontWeight: "font-light",
                    lineHeight: "leading-relaxed",
                    height: "h-full"
                },
                divider: {
                    borderTop: "border-none",
                    borderTopColor: "border-t-blue-gray-100",
                    borderBottom: "border-none",
                    borderBottomColor: "border-b-blue-gray-100",
                },
            },
        },
    },
};