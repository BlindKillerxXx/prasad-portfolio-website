const styles = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",

    heroHeadText:
        "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    heroSubText:
        "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

    sectionHeadText:
        "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
        "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
    '@keyframes glowing': {
        '0%': {
            textShadow: '0 0 10px #00CED1',
        },
        '50%': {
            textShadow: '0 0 20px #00CED1',
        },
        '100%': {
            textShadow: '0 0 30px #00CED1',
        },
    },
    tealText: {
        color: '#00CED1',
        fontSize: 24,
        fontWeight: 'bold',
        animation: 'glowing 1.5s infinite alternate',
    }
};

export { styles };