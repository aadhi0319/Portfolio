import React from "react";
import {Box, Button, Container, CssBaseline, Divider, Grid, Stack, Typography, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/styles";
import {KeyboardArrowDown} from "@mui/icons-material";
import {scroller} from "react-scroll";
import Typewriter from "typewriter-effect";
import BreakpointMasonry from "../components/BreakpointMasonry";
import CheckboxList from "../components/CheckboxList";
import Contact from "../components/Contact";
import CookieDialog from "../components/CookieDialog";
import DesktopNav from "../components/DesktopNav";
import Footer from "../components/Footer";
import PhoneNav from "../components/PhoneNav";
import SchoolCard from "../components/SchoolCard";
import WorkCard from "../components/WorkCard";
import ProjectCard from "../components/ProjectCard";
import "../components/Portfolio.css";

// renders the main portfolio website
function Portfolio() {
    const theme = useTheme();

    // sets global scroll settings
    const scrollSettings = {
        duration: 500,
        smooth: true,
        offset: -50
    };

    // interests to list in the landing page
    const interests = [
        "malware.",
        "operating systems.",
        'rockets.',
        "networks.",
        "quantum computers.",
        "unikernels."
    ]

    return (
        <React.Fragment>
            <CookieDialog />
            <div id="landing">
                <div id="threatmap">
                    <iframe id="threatmapIframe" loading="lazy" title="threatmapFrame" src="https://attackmap.sonicwall.com/live-attack-map/"></iframe>
                </div>
                <div id="introduction">
                    <Typography variant="h1" color="text.primary">Hello! I'm Aadhithya.</Typography>
                    <Typography variant="h1" color="text.primary">I work with <Typography component="span" color="secondary" variant="h1">
                            <Box component="span" sx={{"& > div": {display: "inline"}}}>
                                <Typewriter options={{
                                    strings: interests,
                                    autoStart: true,
                                    delay: 75,
                                    deleteSpeed: 40,
                                    loop: true,
                                }} />
                            </Box>
                        </Typography>
                    </Typography>
                </div>
                <div id="threatMapCredit">
                    <Box sx={{marginBottom: {xs: "20em", md: "13em"}}}>
                        <a href="https://www.sonicwall.com/" target="_blank" rel="noreferrer">
                            <Typography variant="body1" sx={{color: theme.palette.text.primary}}>A special thanks to SonicWall for this cyber threat map.</Typography>
                        </a>
                    </Box>
                </div>
                <div id="resumeDownload">
                    <a href="RES-2021-06337_PAR.pdf" style={{color: "", textDecoration: "none"}} download>
                        <Button variant="contained" color="secondary" size="large" sx={{margin: 2}}>Download Resume</Button>
                    </a>
                </div>
                <div id="downIcon">
                    <KeyboardArrowDown sx={{color: theme.palette.text.primary, fontSize: "120pt", "&:hover": {cursor: "pointer"}}} onClick={() => {
                        scroller.scrollTo("education", scrollSettings);
                    }} />
                </div>
            </div>
            <div id="content">
                <CssBaseline />
                <Container>
                    <PhoneNav scrollSettings={scrollSettings} />
                    <Stack direction="row" spacing={0}>
                        <DesktopNav scrollSettings={scrollSettings} />
                        <Grid container spacing={2} sx={{margin: 1}}>
                            <section id="education">
                                <Grid item xs={12}>
                                    <Typography variant="h1">Education</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <SchoolCard
                                        logo={require("../images/UT.svg?width=150")}
                                        website="https://www.utexas.edu/"
                                        degree={"Bachelor of Science Computer Science & Computational Physics"}
                                        school="University of Texas at Austin"
                                        period={"2019-2023"}
                                        gpa="3.85 / 4.00"
                                    />
                                    <Divider />
                                    <SchoolCard
                                        logo={require("../images/MHS.webp?width=150")}
                                        website="https://mcneil.roundrockisd.org/"
                                        degree={"High School Diploma"}
                                        school="McNeil High School"
                                        period={"2015-2019"}
                                        gpa="5.59 / 4.00"
                                    />
                                </Grid>
                            </section>
                            <section id="experience">
                                <Grid item xs={12}>
                                    <Typography variant="h1">Experience</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <WorkCard
                                        logo={require("../images/TREL.svg?width=150")}
                                        website="https://www.texasrocketlab.com/"
                                        company="Texas Rocket Engineering Laboratory"
                                        title="TRICK Responsible Engineer"
                                        period={"2021-" + new Date().getFullYear()}
                                        hours="ongoing"
                                        skills={{"C/C++": 80, "python": 20}}>
                                            I am currently helping build Halcyon, which is an advanced bipropellant rocket competing in the Base11 challenge to reach the Karman Line. The TRICK 6DOF simulation relies on NASA's TRICK framework.
                                            <CheckboxList variant="body1" iconColor={theme.palette.text.secondary}>
                                                <li>Developed atmosphere and propulsion models.</li>
                                                <li>Integrated a testing framework to unit test models.</li>
                                                <li>Migrated to a self hosted, ITAR approved version control system and implemented workflow pipelines.</li>
                                                <li>Integrated real time code based documention generation.</li>
                                                <li>Optimized state propogation to speed up simulation.</li>
                                            </CheckboxList>
                                    </WorkCard>
                                    <Divider />
                                    <WorkCard 
                                        logo={require("../images/DoD.svg?width=150")}
                                        website="https://www.defense.gov/"
                                        company="Department of Defense"
                                        title="Emerging Technologies Intern"
                                        period="2021"
                                        hours="480 hrs"
                                        skills={{"python": 30, "binary": 20, "react": 10, "bash": 20, "crypto": 20}}>
                                            <CheckboxList variant="body1" iconColor={theme.palette.text.secondary}>
                                                <li>Reverse engineered emerging stealth malware strains.</li>
                                                <li>Identified potential intrusion detection mechanisms for advanced persistent malware.</li>
                                                <li>Improved the department's ability to identify and trace ransomware.</li>
                                            </CheckboxList>
                                    </WorkCard>
                                    <Divider />
                                    <WorkCard
                                        logo={require("../images/TREL.svg?width=150")}
                                        website="https://www.texasrocketlab.com/"
                                        company="Texas Rocket Engineering Laboratory"
                                        title="Simulink Responsible Engineer"
                                        period="2020-2021"
                                        hours="~120 hrs"
                                        skills={{"matlab": 30, "simulink": 70}}>
                                            TREL's primary 6DOF is written in Simulink and is tested against the TRICK 6DOF frequently. This 6DOF is used to test new models before they get integrated into the more stable TRICK 6DOF.
                                            <CheckboxList variant="body1" iconColor={theme.palette.text.secondary}>
                                                <li>Lead the completion of a fully functional Simulink 6DOF.</li>
                                                <li>Wrote the fin actuation and control model.</li>
                                                <li>Integrated the completed Simulink 6DOF with Veristand to perform hardware in the loop (HIL) testing.</li>
                                                <li>Implemented monte carlo functionality for the Simulink 6DOF.</li>
                                            </CheckboxList>
                                    </WorkCard>
                                    <WorkCard
                                        logo={require("../images/SoloStarr.webp?width=150")}
                                        website="https://www.solostarr.com/"
                                        company="SoloStarr"
                                        title="Head of Cybersecurity"
                                        period="2020-2021"
                                        hours="~100 hrs"
                                        skills={{"django": 40, "GSQL": 60}}>
                                            SoloStarr was a promising TikTok competer that hoped to take over TikTok's market share should it be banned due to US data protection concerns.
                                            <CheckboxList variant="body1" iconColor={theme.palette.text.secondary}>
                                                <li>Helped develop a cosine similarity recommendation algorithm in Graph SQL (GSQL).</li>
                                                <li>Set up caching, dynamic rendering quality, and CDN services to be able to stream video without lag.</li>
                                                <li>Set up data encryption pipelines to ensure data privacy.</li>
                                                <li>Integrated the system with Cloudflare to withstand DDOS and other attacks.</li>
                                                <li>In order to reduce costs and remain competitive, all of this was done without a dedicated backend server. We were able to design the entire backend to be stateless and use cloud functions.</li>
                                            </CheckboxList>
                                    </WorkCard>
                                    <Divider />
                                    <WorkCard
                                        logo={require("../images/Infiswift.svg?width=150")}
                                        website="https://infiswift.tech/"
                                        company="Infiswift"
                                        title="Software Development Intern"
                                        period="2020"
                                        hours="480 hrs"
                                        skills={{"python": 50, "SQL": 20, "MQTT": 15, "BLE": 15}}>
                                            InfiSwift specializes in using AI to maximize the performance of interet of things (IOT) devices. I worked on using Bluetooth Low Energy (BLE) to accurately trilaterate devices indoors where GPS does not work. This project heavily focused on statistical data analysis, noise reduction, and IOT communication protocols.
                                            <CheckboxList variant="body1" iconColor={theme.palette.text.secondary}>
                                                <li>Developed an algorithm to computed the distance of a device based on its BLE signal strength.</li>
                                                <li>Developed an algorithm to trilaterate the 3D position of a device using BLE.</li>
                                                <li>Launched a server capable of tracking BLE devices at scale and sending SMS alerts when devices go offline.</li>
                                                <li>Wrote a 6D kalman filter to obtain sub-meter tracking accuracy.</li>
                                            </CheckboxList>
                                    </WorkCard>
                                    <Divider />
                                    <WorkCard
                                        logo={require("../images/Mistnet.svg?width=150")}
                                        website="https://logrhythm.com/"
                                        company="Mistnet"
                                        title="Software Engineering Intern"
                                        period="2018"
                                        hours="~700 hrs"
                                        skills={{"zeek": 10, "linux": 15, "pentest": 15, "osquery": 20, "elk stack": 40}}>
                                            Mistnet was a startup that specialized in machine learning based threat detection. It was acquired by LogRhythm in 2021. I was given the task of reducing false positives through operating system and network level monitoring. I also aided in real time big data analysis and threat detection.
                                            <CheckboxList variant="body1" iconColor={theme.palette.text.secondary}>
                                                <li>Minimized Bro (now Zeek) to capture large packet rates on internet of things (IOT) devices with low memory and cpu power.</li>
                                                <li>Implemented a Packetbeats to Elasticsearch to Kibana pipeline to identify and monitor threats in real time.</li>
                                                <li>Translated the MITRE ATT&CK matrix to Osquery queries and then used Kolide to identify MITRE intrusions at scale.</li>
                                                <li>Performed network intrusion and subsequent lateral movement to test and train isolation forest based intrusion detection.</li>
                                            </CheckboxList>
                                    </WorkCard>
                                    <Divider />
                                    <WorkCard
                                        logo={require("../images/Sandbox.svg?width=150")}
                                        website="https://www.builtinaustin.com/2020/02/04/sputnik-atx-winter-2020-cohort"
                                        company="Sandbox Systems"
                                        title="CEO & Co-Founder"
                                        period="2017-2020"
                                        hours="~800 hrs"
                                        skills={{"firebase": 5, "docker": 15, "javascript": 30, "GCP": 10, "django": 40}}>
                                            Sandbox Systems developed Makai, one of the first cloud based integrated development environments (IDE). The software allowed users to code anytime, anywhere, and on any system by simply logging into the Makai website. The company ended up raising 10K seed funding from the Sputnik Accelerator. Ulitimately, as high school students, we couldn't compete with Amazon Web Services Cloud9. Hence, we open sourced Makai and dissolved the company in 2020.
                                            <CheckboxList variant="body1" iconColor={theme.palette.text.secondary}>
                                                <li>Developed the proprietary web compilation engine to compile C, C++, Bash, and Python in the cloud.</li>
                                                <li>Integrated Docker engine support so that users could compile their code on a variety of computer architectures.</li>
                                                <li>Developed a cloud based debugger for C and C++ code.</li>
                                                <li>Oversaw all security for both Makai and the company infrastructure.</li>
                                                <li>Launched and maintained the GCP server cluster to dynamically manage load.</li>
                                                <li>Implemented the real time analytics engine.</li>
                                                <li>Integrated real time HTML, CSS, and Javascript client side rendering.</li>
                                            </CheckboxList>
                                    </WorkCard>
                                </Grid>
                            </section>
                            <section id="projects">
                                <Grid item xs={12}>
                                    <Typography variant="h1" sx={{marginBottom: 2}}>Projects</Typography>
                                    <BreakpointMasonry columns={3}>
                                        <ProjectCard
                                            image={require("../images/Unikraft.webp?height=140")}
                                            website="https://unikraft.org/"
                                            name="Unikraft"
                                            period="2021"
                                            skills={{"bash": 40, "Makefile": 30, "QEMU": 20, "C": 10}}>
                                                I am a proud open source contributor to the Unikraft project. Unikraft is a Linux Foundation project that is capable of generating extremely light, but simultaneously powerful taylored unikernels. One can think of these as autogenerated operating systems mimized to be able to run one user application only. As such, a lot of the bloat in traditional operating systems can be removed. This also minimizes the attack surface and hence improves security.
                                        </ProjectCard>
                                        <ProjectCard
                                            image={require("../images/Kolasi.webp?height=140")}
                                            website="https://drive.google.com/file/d/1a5_i7H3suIQRpZQxGb4wCN028jDxXVr7/view?usp=sharing"
                                            name="Kolasi"
                                            period="2017"
                                            skills={{"C": 100}}>
                                                An extremely lightweight and stealthy remote access trojan (RAT) for MacOSX. It has the ability to initiate a reverse tcp shell, sniff network packets, spoof system dialogs, process inject, and more. If the command and control (C2) server goes down, the RAT is capable of switching to a previously unknown live server without communicating with the attacker.
                                        </ProjectCard>
                                        <ProjectCard
                                            image={require("../images/Hospital.webp?height=140")}
                                            message="The government considers this a violation of HIPPA, so source code cannot be shared. That said, I did talk to a representative about potential mitigations."
                                            duration={10000}
                                            name="Hospital Communications"
                                            period="2020"
                                            skills={{"RTL-SDR": 80, "nodejs": 20}}>
                                                Was able to use a software defined radio (RTL-SDR) to decode pager traffic going between hospitals and EMS vehicles. I was able to see, in plain text, the communications of several hospitals and EMS vehicles within a 100 mile radius from where I live. The moral of the story is that hospitals should use encrypted pagers.
                                        </ProjectCard>
                                        <ProjectCard
                                            image={require("../images/Logos.webp?height=140")}
                                            message="Unfortunately, there is no web content to link to for this project."
                                            name="Logos"
                                            period="2021"
                                            skills={{"C": 50, "NASM": 30, "QEMU": 20}}>
                                                The Logical Operating System, or Logos for short, is a low level operating system that I designed and built. It has its own bootloader and comes with minimal screen, keyboard, clock, and other system drivers. Logos starts in Intel 16 bit mode and then transitions to 32 bit x86.
                                        </ProjectCard>
                                        <ProjectCard
                                            image={require("../images/LocoEats.webp?height=140")}
                                            website="https://locoeats.org/"
                                            name="LocoEats"
                                            period="2020"
                                            skills={{"react": 30, "django": 40, "postgreSQL": 30}}>
                                                During COVID, a lot of local restaurants were struggling to establish a web prescence and market themselves online in order to stay in business. LocoEats allows a user to search for food they want from locally owned restaurants. I set up the backend server and developed the algorithm that distinguishes between locally owned restaurants and chains based on a variety of heuristics.
                                        </ProjectCard>
                                        <ProjectCard
                                            image={require("../images/Logger.webp?height=140")}
                                            website="https://github.com/aadhi0319/Logger"
                                            name="Logger"
                                            period="2017"
                                            skills={{"java": 100}}>
                                                A lightweight Java jar file that autodeploys from an Attiny85 usb chip. After deploying on a Windows machine, the payload is capable of decrypting all saved user credentials and uploading the plain text to a preconfigured DropBox account. The payload then attempts to persist so that any user that logs into the computer afterwards will also be compromised.
                                        </ProjectCard>
                                        <ProjectCard
                                            image={require("../images/ACC.webp?height=140")}
                                            website="https://www.austincc.edu/"
                                            name="ACC"
                                            period="2018"
                                            skills={{"javascript": 100}}>
                                                Discovered a vulnerability in which some of the timing modules were offloaded to client side software to reduce load on the server. This allowed me to inject Javascript and sign up for classes before other students. I also had the ability to drop students out of and assign students to any course of my choice. This vulnerability was reported and although I never got an official response, the vulnerability was mitigated several weeks later.
                                        </ProjectCard>
                                        <ProjectCard
                                            image={require("../images/Pintos.webp?height=140")}
                                            website="https://web.stanford.edu/class/cs140/projects/pintos/pintos_1.html#SEC1"
                                            name="Pintos"
                                            period="2020"
                                            skills={{"C": 100}}>
                                                An academic project where we had to extend an operating system to support threads, user programs, virtual memory, priority scheduling, and a multithreaded file system. Due to academic integrity concerns, the source code of this project cannot be publically shared, but the technical documentation for the project is linked to this card.
                                        </ProjectCard>
                                        <ProjectCard
                                            image={require("../images/Portfolio.webp?height=140")}
                                            website={process.env.REACT_APP_PUBLIC_URL}
                                            name="Portfolio"
                                            period="2022"
                                            skills={{"react": 80, "react-static": 20}}>
                                                An interactive portfolio to showcase what I have been working on. It's the lightweight, yet powerful website that you're on right now. There are several optimizations under the hood to handle a variety of devices and internet connections. Load times have been stress tested against everything from 2G to high speed internet.
                                        </ProjectCard>
                                        <ProjectCard
                                            image={require("../images/Venom.webp?height=140")}
                                            message="Unfortunately, there is no web content to link to for this project."
                                            name="Venom"
                                            period="2018"
                                            skills={{"python": 50, "AES": 50}}>
                                                Attempted to regress the AES 128 SBOX with neural networks. Full, unfortunately (or fortunately if you care about internet security) did not work. To show the importance of the SBOX being non-linearizable, I implemented AES 128 ECB with a linearized SBOX and was able to successfully perform a known plaintext attack.
                                        </ProjectCard>
                                        <ProjectCard
                                            image={require("../images/Artemis.webp?height=140")}
                                            message="Unfortunately, there is no web content to link to for this project."
                                            name="Artemis"
                                            period="2017"
                                            skills={{"octave": 100}}>
                                                Inspired by "The Machine" from Person of Interest, Artemis was a convolutional neural network written from scratch in Octave supposed to be capable of identifying individuals prone to violent behavior based on past life choices, such as credit history and incidents with law enforcement. It was difficult to get good data due to data privacy laws and as such, the algorithm became biased.
                                        </ProjectCard>
                                        <ProjectCard
                                            image={require("../images/NoEye.webp?height=140")}
                                            message="Unfortunately, there is no web content to link to for this project."
                                            name="NoEye"
                                            period="2016"
                                            skills={{"bash": 100}}>
                                                A shell script capable of exploiting wildcards in SQL in order to brute force passwords in O(N) time where N is the number of characters in the password. An attacker can point the script at an input field in a website vulnerable to SQL injection (works on both normal and blind SQL injection) and the script will generate valid inputs for that field.
                                        </ProjectCard>
                                        <ProjectCard
                                            image={require("../images/iQualify.webp?height=140")}
                                            website="https://devpost.com/software/iqualify"
                                            name="iQualify"
                                            period="2020"
                                            skills={{"google data studio": 20, "flask": 50, "SQL": 30}}>
                                                Each locality has its own rules about COVID benefits and the process to apply for them. iQualify presents a fast questionaire to determine approximately how much an individual will qualify for and then automatically provides the forms that need to be filled out in order to receive those benefits.
                                        </ProjectCard>
                                        <ProjectCard
                                            image={require("../images/PearsonHash.webp?height=140")}
                                            message="Unfortunately, there is no web content to link to for this project."
                                            name="Quantum Pearson Hash Cracker"
                                            period="2019"
                                            skills={{"python": 20, "qiskit": 80}}>
                                                The Pearson Hash is an 8-bit hash that is trivial to brute force on a classical computer. The Quantum Pearson Hash Cracker leverages Grover's Algorithm in order to crack the Pearson Hash in O(sqrt(N)) time. The code was then tested on both IBM's actual quantum computer and IBM's quantum computer simulator.
                                        </ProjectCard>
                                    </BreakpointMasonry>
                                </Grid>
                            </section>
                            <section id="contact" style={{width: "100%"}}>
                                <Typography variant="h1">Contact</Typography>
                                <Contact />
                            </section>
                        </Grid>
                    </Stack>
                    <Footer />
                    {(useMediaQuery(theme.breakpoints.up("md"))) ? null : <Box sx={{width: "100%", height: "60px"}} />}
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Portfolio;