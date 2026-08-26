window.AP_DATA = window.AP_DATA || {};

window.AP_DATA.exam1 = {
  id: "exam1",
  name: "Core 1 (220-1101) \u2014 Practice Exam 1",
  timeMinutes: 60,
  units: [ { title: "", html: "", questions: [
    {
      n: 1,
      prompt: "<p>A technician is upgrading memory in a desktop motherboard that supports DDR5. Which feature should the technician expect compared with DDR4?</p>",
      choices: ["288 pins with the key notch in a different position than DDR4", "260 pins and laptop SODIMM form factor", "240 pins and a maximum transfer rate of 1600 MT/s", "200 pins and dual-channel operation only"],
      answer: 0,
      topic: "Hardware",
      objective: "3.2",
      difficulty: "easy",
      explanation: "<p>DDR5 desktop DIMMs use 288 pins like DDR4, but the notch is keyed differently and the modules are not interchangeable. DDR5 also starts at higher data rates than DDR4.</p><p>260 pins is a DDR4/DDR5 SODIMM laptop form factor, 240 pins describes older DDR3 desktop DIMMs, and 200 pins describes older laptop memory rather than a modern desktop DDR5 module.</p>"
    },
    {
      n: 2,
      prompt: "<p>A small office needs new copper cabling that can support 10 Gbps Ethernet for a 100-meter permanent link. Which cable category is the best minimum choice?</p>",
      choices: ["Cat 5e", "Cat 6", "Cat 6a", "Cat 3"],
      answer: 2,
      topic: "Networking",
      objective: "2.2",
      difficulty: "easy",
      explanation: "<p>Cat 6a is rated for 10 Gbps Ethernet up to 100 meters, making it the best minimum category for this requirement.</p><p>Cat 5e is normally used for 1 Gbps at 100 meters, Cat 6 can do 10 Gbps only to about 55 meters, and Cat 3 is voice/legacy data cabling and is not appropriate for modern 10 Gbps Ethernet.</p>"
    },
    {
      n: 3,
      prompt: "<p>A user reports that a desktop suddenly powered off and now a burning smell is coming from the case. What should the technician do FIRST?</p>",
      choices: ["Replace the CMOS battery and retest", "Run a full memory diagnostic", "Reseat the 24-pin ATX connector", "Disconnect power and stop using the system"],
      answer: 3,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.2",
      difficulty: "medium",
      explanation: "<p>A burning smell indicates a possible electrical failure or fire hazard. The first action is to remove power and prevent further damage or injury before opening or testing the computer.</p><p>Replacing the CMOS battery would not address a burning smell, running memory diagnostics requires powering a potentially unsafe system, and reseating the ATX connector should only happen after the system is safely disconnected and inspected.</p>"
    },
    {
      n: 4,
      prompt: "<p>A technician replaces a cracked phone screen. Touch input still works, but the image remains black even with a known-good battery. Which component is most likely still faulty?</p>",
      choices: ["NFC antenna", "LCD/OLED display panel", "Digitizer", "Vibration motor"],
      answer: 1,
      topic: "Mobile Devices",
      objective: "1.2",
      difficulty: "easy",
      explanation: "<p>The display panel creates the visible image. If touch works but the screen is black, the digitizer can be functioning while the LCD or OLED panel, display cable, or backlight path is faulty.</p><p>The NFC antenna affects tap-to-pay and short-range pairing, the digitizer handles touch rather than image output, and the vibration motor only provides haptic feedback.</p>"
    },
    {
      n: 5,
      prompt: "<p>A video editor wants the fastest internal storage for 4K project files on a modern workstation. Which option should the technician recommend?</p>",
      choices: ["2.5-inch SATA SSD", "M.2 NVMe SSD using PCIe lanes", "mSATA SSD in a mini PCIe slot", "3.5-inch 7200-rpm SATA hard drive"],
      answer: 1,
      topic: "Hardware",
      objective: "3.3",
      difficulty: "medium",
      explanation: "<p>An M.2 NVMe SSD uses PCIe lanes and the NVMe protocol, providing much lower latency and higher throughput than SATA-based storage.</p><p>A 2.5-inch SATA SSD is limited by SATA, mSATA is an older SATA-based form factor, and a 7200-rpm hard drive has much higher latency and lower random I/O performance.</p>"
    },
    {
      n: 6,
      prompt: "<p>Which TCP port is used by HTTPS for encrypted web traffic?</p>",
      choices: ["443", "80", "3389", "25"],
      answer: 0,
      topic: "Networking",
      objective: "2.1",
      difficulty: "easy",
      explanation: "<p>HTTPS uses TCP port 443 to provide encrypted HTTP sessions over TLS.</p><p>Port 80 is unencrypted HTTP, port 3389 is Remote Desktop Protocol, and port 25 is SMTP mail transfer between mail servers.</p>"
    },
    {
      n: 7,
      prompt: "<p>A developer installs VirtualBox on a Windows laptop and creates several Linux test VMs. What type of hypervisor is being used?</p>",
      choices: ["Bare-metal Type 1 hypervisor", "Container runtime", "Cloud orchestration platform", "Hosted Type 2 hypervisor"],
      answer: 3,
      topic: "Virtualization and Cloud Computing",
      objective: "4.2",
      difficulty: "easy",
      explanation: "<p>VirtualBox running on top of Windows is a hosted Type 2 hypervisor because it depends on a host operating system.</p><p>A bare-metal Type 1 hypervisor installs directly on hardware, a container runtime shares the host OS kernel instead of virtualizing full hardware, and a cloud orchestration platform manages resources rather than acting as the local hypervisor here.</p>"
    },
    {
      n: 8,
      prompt: "<p>A laptop connects to Wi-Fi and shows signal strength, but Windows reports limited connectivity and the address is 169.254.31.8. What is the most likely cause?</p>",
      choices: ["DNS server is resolving the wrong host name", "The access point is using channel 11", "The client failed to obtain a DHCP lease", "The subnet mask is too large for the VLAN"],
      answer: 2,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.7",
      difficulty: "medium",
      explanation: "<p>An address in 169.254.0.0/16 is APIPA, which Windows assigns when a DHCP lease cannot be obtained. The client can associate to Wi-Fi but lacks valid IP configuration.</p><p>DNS problems usually occur after a valid IP address is present, channel 11 is normal in 2.4 GHz networks, and a subnet mask issue would not typically cause APIPA by itself.</p>"
    },
    {
      n: 9,
      prompt: "<p>A motherboard manual lists support for a CPU cooler requiring an 8-pin EPS12V connector. What does this connector provide?</p>",
      choices: ["PCIe auxiliary power for a graphics card", "SATA power for storage drives", "12 V CPU power to the motherboard voltage regulators", "Standby power to USB ports only"],
      answer: 2,
      topic: "Hardware",
      objective: "3.5",
      difficulty: "easy",
      explanation: "<p>The 8-pin EPS12V connector supplies 12 V power near the CPU socket so the motherboard VRMs can power the processor reliably.</p><p>PCIe auxiliary power uses 6-pin, 8-pin, or 12VHPWR connectors for GPUs, SATA power feeds drives, and standby USB power comes from the PSU and motherboard design rather than the EPS CPU connector.</p>"
    },
    {
      n: 10,
      prompt: "<p>A technician is subnetting a network. Which subnet mask matches a /26 prefix length?</p>",
      choices: ["255.255.255.192", "255.255.255.224", "255.255.255.240", "255.255.255.128"],
      answer: 0,
      topic: "Networking",
      objective: "2.5",
      difficulty: "hard",
      explanation: "<p>A /26 uses 26 network bits. The last octet has binary 11000000, which equals 192, so the mask is 255.255.255.192 and provides 62 usable host addresses per subnet.</p><p>255.255.255.224 is /27, 255.255.255.240 is /28, and 255.255.255.128 is /25, so each represents a different subnet size.</p>"
    },
    {
      n: 11,
      prompt: "<p>A user wants to pay at a retail terminal by tapping a smartphone. Which mobile technology enables this short-range transaction?</p>",
      choices: ["Bluetooth", "Hotspot tethering", "Infrared", "NFC"],
      answer: 3,
      topic: "Mobile Devices",
      objective: "1.4",
      difficulty: "easy",
      explanation: "<p>NFC is designed for very short-range communication and is commonly used for contactless payments and tap-to-pair scenarios.</p><p>Bluetooth supports peripheral pairing at longer ranges, hotspot tethering shares cellular data over Wi-Fi or USB, and infrared is line-of-sight and not the standard for phone payment terminals.</p>"
    },
    {
      n: 12,
      prompt: "<p>A workstation powers on, fans spin, but there is no display and the motherboard emits repeated memory beep codes. What should the technician check FIRST?</p>",
      choices: ["Replace the monitor cable", "Reseat or test the RAM modules", "Install a larger power supply", "Update the operating system video driver"],
      answer: 1,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.2",
      difficulty: "medium",
      explanation: "<p>POST beep codes occur before the operating system loads and often identify hardware faults. Memory beep codes point to seating, compatibility, or failed RAM, so checking RAM first is appropriate.</p><p>A monitor cable can cause no video but not memory beep codes, a larger PSU is not indicated by the specific POST code, and an OS video driver cannot affect pre-boot POST beeps.</p>"
    },
    {
      n: 13,
      prompt: "<p>A small business wants a storage array that can survive two drive failures while using block-level striping with distributed parity. Which RAID level meets this requirement?</p>",
      choices: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"],
      answer: 3,
      topic: "Hardware",
      objective: "3.3",
      difficulty: "medium",
      explanation: "<p>RAID 6 uses striping with dual distributed parity and can tolerate two drive failures. It requires at least four drives.</p><p>RAID 0 has no fault tolerance, RAID 1 mirrors data and usually tolerates one drive per mirror set, and RAID 5 uses single distributed parity and can tolerate only one drive failure.</p>"
    },
    {
      n: 14,
      prompt: "<p>Which private IPv4 range is defined by RFC 1918 for a /12 network?</p>",
      choices: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "169.254.0.0/16"],
      answer: 1,
      topic: "Networking",
      objective: "2.5",
      difficulty: "easy",
      explanation: "<p>The RFC 1918 /12 private range is 172.16.0.0 through 172.31.255.255, written as 172.16.0.0/12.</p><p>10.0.0.0/8 and 192.168.0.0/16 are also private ranges but not the /12 range, while 169.254.0.0/16 is APIPA link-local addressing.</p>"
    },
    {
      n: 15,
      prompt: "<p>A company moves its email, productivity apps, and file collaboration to Microsoft 365. Which cloud service model is this?</p>",
      choices: ["SaaS", "IaaS", "PaaS", "VDI"],
      answer: 0,
      topic: "Virtualization and Cloud Computing",
      objective: "4.1",
      difficulty: "medium",
      explanation: "<p>Software as a Service provides complete applications delivered by a provider, such as hosted email and productivity suites, with minimal customer management of underlying infrastructure.</p><p>IaaS provides virtualized compute and storage, PaaS provides a managed application platform for developers, and VDI delivers virtual desktops rather than an application suite.</p>"
    },
    {
      n: 16,
      prompt: "<p>A user reports that a gaming desktop shuts down during heavy load. Monitoring shows CPU temperature quickly reaches 100 C and the clock speed drops before shutdown. What is the most likely cause?</p>",
      choices: ["Incorrect DNS server", "Loose front-panel LED connector", "Thermal throttling due to failed cooling", "Failing CMOS battery"],
      answer: 2,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.2",
      difficulty: "hard",
      explanation: "<p>High CPU temperature followed by clock speed reduction and shutdown indicates thermal throttling and overtemperature protection, often caused by a failed fan, poor heatsink contact, or dried thermal paste.</p><p>DNS settings do not affect CPU temperature, a front-panel LED connector only affects case lights, and a CMOS battery problem usually causes time or BIOS setting loss rather than heat-related shutdowns.</p>"
    },
    {
      n: 17,
      prompt: "<p>Which printer type commonly uses a ribbon and tractor-fed multipart forms?</p>",
      choices: ["Impact", "Inkjet", "Thermal", "Laser"],
      answer: 0,
      topic: "Hardware",
      objective: "3.6",
      difficulty: "easy",
      explanation: "<p>Impact printers strike a ribbon against paper and can print multipart carbonless forms, often using tractor-feed paper.</p><p>Inkjet printers spray liquid ink, thermal printers heat special paper or transfer ribbons, and laser printers use toner with an electrophotographic imaging process.</p>"
    },
    {
      n: 18,
      prompt: "<p>A technician is configuring 2.4 GHz Wi-Fi in a dense office. Which channels should be selected on adjacent access points to minimize overlap in North America?</p>",
      choices: ["2, 7, and 12", "3, 8, and 13", "4, 9, and 14", "1, 6, and 11"],
      answer: 3,
      topic: "Networking",
      objective: "2.3",
      difficulty: "medium",
      explanation: "<p>In the 2.4 GHz band, channels 1, 6, and 11 are the standard non-overlapping 20 MHz channels used in North America.</p><p>Channels 2/7/12, 3/8/13, and 4/9/14 overlap with common channels or are not generally available in North America, which increases co-channel and adjacent-channel interference.</p>"
    },
    {
      n: 19,
      prompt: "<p>A phone must share its cellular Internet connection with a laptop while traveling. Which feature should be enabled?</p>",
      choices: ["NFC", "Airplane mode", "Mobile hotspot/tethering", "Screen mirroring"],
      answer: 2,
      topic: "Mobile Devices",
      objective: "1.4",
      difficulty: "easy",
      explanation: "<p>Mobile hotspot or tethering shares a phone's cellular data connection with another device over Wi-Fi, USB, or Bluetooth.</p><p>NFC is short-range tap communication, airplane mode disables radios unless selectively re-enabled, and screen mirroring displays content but does not share Internet access.</p>"
    },
    {
      n: 20,
      prompt: "<p>A laser printer produces repeated ghost images at regular intervals down each page. Which component is the most likely cause?</p>",
      choices: ["Paper pickup roller", "Fuser assembly", "Network interface card", "Duplexing unit"],
      answer: 1,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.6",
      difficulty: "medium",
      explanation: "<p>Ghosting at repeated intervals is commonly caused by toner not being fully fused or residual toner on a rotating component, with the fuser being a frequent culprit.</p><p>A pickup roller causes feed or jam issues, a network interface card affects connectivity or print submission, and a duplexing unit mainly affects two-sided paper paths rather than repeated unfused images.</p>"
    },
    {
      n: 21,
      prompt: "<p>Which display panel technology is typically preferred for the widest viewing angles and color accuracy in a laptop used for photo editing?</p>",
      choices: ["TN", "IPS", "Passive matrix", "CCFL"],
      answer: 1,
      topic: "Hardware",
      objective: "3.7",
      difficulty: "medium",
      explanation: "<p>IPS panels are known for wide viewing angles and good color reproduction, which makes them a common choice for creative work.</p><p>TN panels are fast and inexpensive but have poorer viewing angles, passive matrix is older display technology, and CCFL is a backlight type rather than an LCD panel technology.</p>"
    },
    {
      n: 22,
      prompt: "<p>Which protocol and port are used for secure command-line administration of a network switch?</p>",
      choices: ["Telnet on TCP 23", "SNMP on UDP 161", "SSH on TCP 22", "RDP on TCP 3389"],
      answer: 2,
      topic: "Networking",
      objective: "2.1",
      difficulty: "easy",
      explanation: "<p>SSH uses TCP port 22 and provides encrypted remote command-line access, making it the preferred secure method for managing network devices.</p><p>Telnet on port 23 is unencrypted, SNMP on UDP 161 is for monitoring and management queries rather than an interactive secure shell, and RDP on 3389 is for graphical Windows remote desktop sessions.</p>"
    },
    {
      n: 23,
      prompt: "<p>An administrator needs virtual desktops hosted in the provider's cloud so users can access the same managed desktop from many devices. Which solution best matches this requirement?</p>",
      choices: ["On-premises VDI", "Local Type 2 virtualization", "NAS file synchronization", "Cloud-hosted VDI/DaaS"],
      answer: 3,
      topic: "Virtualization and Cloud Computing",
      objective: "4.2",
      difficulty: "hard",
      explanation: "<p>Cloud-hosted VDI, often called Desktop as a Service, delivers managed virtual desktops from a cloud provider and supports access from multiple endpoint types.</p><p>On-premises VDI keeps the desktop infrastructure in the company's data center, local Type 2 virtualization runs VMs on an individual host, and NAS file synchronization shares files rather than complete desktops.</p>"
    },
    {
      n: 24,
      prompt: "<p>A technician hears a rhythmic clicking sound from a hard drive and the computer freezes while opening files. What should the technician do FIRST?</p>",
      choices: ["Back up or clone any accessible data immediately", "Defragment the drive", "Disable SMART reporting", "Reinstall the operating system"],
      answer: 0,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.3",
      difficulty: "medium",
      explanation: "<p>Clicking and freezing suggest imminent mechanical drive failure. The priority is preserving data by backing up or cloning what is still readable before additional stress causes total failure.</p><p>Defragmenting adds heavy disk activity and can accelerate failure, disabling SMART hides warnings, and reinstalling the OS risks overwriting data and does not fix mechanical symptoms.</p>"
    },
    {
      n: 25,
      prompt: "<p>Which laser printer imaging step uses heat and pressure to bond toner permanently to paper?</p>",
      choices: ["Developing", "Transferring", "Fusing", "Charging"],
      answer: 2,
      topic: "Hardware",
      objective: "3.6",
      difficulty: "easy",
      explanation: "<p>Fusing is the step in which heat and pressure melt toner into the paper fibers so the image becomes permanent.</p><p>Developing applies toner to the latent image on the drum, transferring moves toner from the drum to the paper, and charging applies a uniform charge to the drum before exposure.</p>"
    },
    {
      n: 26,
      prompt: "<p>A SOHO router must allow an internal security camera at 192.168.1.50 to be reached from the Internet on TCP 8443. Which feature should be configured?</p>",
      choices: ["DHCP reservation only", "MAC filtering", "DMZ for all clients", "Port forwarding"],
      answer: 3,
      topic: "Networking",
      objective: "2.4",
      difficulty: "medium",
      explanation: "<p>Port forwarding maps an external port on the router to a specific internal IP address and port, allowing inbound connections through NAT to a selected device.</p><p>A DHCP reservation only keeps the camera's IP stable, MAC filtering controls wireless association, and placing all clients in a DMZ is broader and less secure than forwarding only the needed port.</p>"
    },
    {
      n: 27,
      prompt: "<p>A technician needs to connect a new external monitor, wired keyboard, storage device, and Ethernet adapter to a laptop using one reversible connector that also supports charging. Which port is most likely used?</p>",
      choices: ["USB-C", "RJ11", "VGA", "F-type"],
      answer: 0,
      topic: "Mobile Devices",
      objective: "1.3",
      difficulty: "easy",
      explanation: "<p>USB-C is a reversible connector used for data, display alternate modes, docks, adapters, and USB Power Delivery charging on many laptops.</p><p>RJ11 is used for telephone/modem connections, VGA is analog video only, and F-type is used for coaxial cable such as cable TV or broadband service.</p>"
    },
    {
      n: 28,
      prompt: "<p>Users report intermittent wireless connectivity only in one conference room. Signal is strong, but connections drop whenever several older Bluetooth headsets are active. What is the most likely issue?</p>",
      choices: ["Incorrect default gateway", "2.4 GHz radio interference", "Expired DHCP scope", "Wrong DNS suffix"],
      answer: 1,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.7",
      difficulty: "medium",
      explanation: "<p>Bluetooth and 2.4 GHz Wi-Fi share the same frequency range, so nearby Bluetooth activity can contribute to interference and intermittent wireless drops even when signal strength appears good.</p><p>An incorrect gateway would affect routed traffic more consistently, an expired DHCP scope would affect address assignment broadly, and a DNS suffix issue would affect name resolution rather than radio stability.</p>"
    },
    {
      n: 29,
      prompt: "<p>A technician is selecting a replacement power supply for a workstation with a high-end graphics card. Which connector is most likely needed by the GPU?</p>",
      choices: ["4-pin Molex only", "8-pin EPS12V", "SATA 15-pin", "PCIe 6+2-pin auxiliary power"],
      answer: 3,
      topic: "Hardware",
      objective: "3.5",
      difficulty: "medium",
      explanation: "<p>Discrete graphics cards commonly require PCIe auxiliary power, often provided by 6-pin, 8-pin, or 6+2-pin PCIe connectors depending on the card.</p><p>4-pin Molex is legacy peripheral power, 8-pin EPS12V powers the CPU area of the motherboard, and SATA 15-pin power is for drives and some accessories.</p>"
    },
    {
      n: 30,
      prompt: "<p>A technician terminates both ends of an Ethernet patch cable using T568B. Which wire pair is on pins 1 and 2?</p>",
      choices: ["White-orange and orange", "White-green and green", "White-blue and blue", "White-brown and brown"],
      answer: 0,
      topic: "Networking",
      objective: "2.2",
      difficulty: "hard",
      explanation: "<p>In T568B, pins 1 and 2 are the orange pair: white-orange on pin 1 and orange on pin 2.</p><p>White-green and green occupy pins 3 and 6 in T568B, white-blue and blue are pins 5 and 4, and white-brown and brown are pins 7 and 8.</p>"
    },
    {
      n: 31,
      prompt: "<p>After replacing a network cable, a switch interface alternates rapidly between up and down. Which symptom is this?</p>",
      choices: ["High jitter", "Port flapping", "DNS poisoning", "APIPA addressing"],
      answer: 1,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.7",
      difficulty: "medium",
      explanation: "<p>Port flapping describes a switch port repeatedly changing link state between up and down, often because of a bad cable, damaged port, speed/duplex issue, or failing NIC.</p><p>High jitter is variation in packet delay, DNS poisoning is a name-resolution attack or corruption, and APIPA addressing is a client self-assigning 169.254.x.x after DHCP failure.</p>"
    },
    {
      n: 32,
      prompt: "<p>A cloud provider bills a company based on actual CPU, storage, and network usage each month. Which cloud characteristic is being described?</p>",
      choices: ["Rapid elasticity", "High availability", "Measured service", "Community cloud"],
      answer: 2,
      topic: "Virtualization and Cloud Computing",
      objective: "4.1",
      difficulty: "easy",
      explanation: "<p>Measured service means cloud resource usage is monitored, metered, and billed according to consumption.</p><p>Rapid elasticity is the ability to scale resources quickly, high availability keeps services accessible during failures, and community cloud is a deployment model shared by organizations with common requirements.</p>"
    },
    {
      n: 33,
      prompt: "<p>Which SATA revision provides a theoretical signaling rate of 6 Gbps?</p>",
      choices: ["SATA III", "SATA I", "SATA II", "PATA"],
      answer: 0,
      topic: "Hardware",
      objective: "3.3",
      difficulty: "medium",
      explanation: "<p>SATA III, also called SATA 6 Gb/s, provides a theoretical 6 Gbps signaling rate for compatible drives and controllers.</p><p>SATA I is 1.5 Gbps, SATA II is 3 Gbps, and PATA is an older parallel ATA interface that does not use SATA signaling rates.</p>"
    },
    {
      n: 34,
      prompt: "<p>A network technician must allow Windows file sharing between two subnets. Which port should be permitted through the firewall for SMB over TCP?</p>",
      choices: ["UDP 161", "TCP 445", "TCP 110", "UDP 67"],
      answer: 1,
      topic: "Networking",
      objective: "2.1",
      difficulty: "hard",
      explanation: "<p>Modern SMB file sharing uses TCP port 445, so that port must be allowed when file sharing is required across routed networks.</p><p>UDP 161 is SNMP queries, TCP 110 is POP3 mail retrieval, and UDP 67 is used by DHCP servers.</p>"
    },
    {
      n: 35,
      prompt: "<p>A user buys wireless earbuds and needs to connect them to a tablet for the first time. Which process should be used?</p>",
      choices: ["Enable cellular roaming", "Configure APN settings", "Bluetooth pairing", "Start NFC payment enrollment"],
      answer: 2,
      topic: "Mobile Devices",
      objective: "1.3",
      difficulty: "easy",
      explanation: "<p>Bluetooth pairing discovers the earbuds, exchanges a pairing key or confirmation, and stores the trusted connection for future audio use.</p><p>Cellular roaming and APN settings relate to mobile carrier data, while NFC payment enrollment is for contactless payment credentials rather than audio peripherals.</p>"
    },
    {
      n: 36,
      prompt: "<p>A user's laptop battery is swollen and the touchpad is lifting away from the palm rest. What should the technician do?</p>",
      choices: ["Fully discharge and recalibrate the battery", "Puncture the battery to release pressure", "Continue using the laptop on AC power", "Power off the laptop and arrange safe battery replacement"],
      answer: 3,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.5",
      difficulty: "medium",
      explanation: "<p>A swollen lithium-ion battery is a safety hazard. The laptop should be powered off, handled carefully, and serviced with proper battery replacement and disposal procedures.</p><p>Fully discharging can be unsafe, puncturing can cause fire or chemical exposure, and continued AC use leaves the damaged battery in a hazardous state.</p>"
    },
    {
      n: 37,
      prompt: "<p>Which printer type extrudes filament layer by layer to build a physical object?</p>",
      choices: ["Thermal receipt printer", "Inkjet printer", "Laser printer", "3-D printer"],
      answer: 3,
      topic: "Hardware",
      objective: "3.6",
      difficulty: "medium",
      explanation: "<p>A 3-D printer commonly uses fused filament fabrication to heat and extrude plastic material layer by layer into a physical object.</p><p>Thermal receipt printers create images on heat-sensitive media, inkjet printers spray liquid ink on paper, and laser printers use toner and a fuser for flat documents.</p>"
    },
    {
      n: 38,
      prompt: "<p>Which network device forwards frames within a LAN based on MAC addresses?</p>",
      choices: ["Router", "Switch", "Cable modem", "Load balancer"],
      answer: 1,
      topic: "Networking",
      objective: "2.2",
      difficulty: "easy",
      explanation: "<p>A switch learns MAC addresses and forwards Ethernet frames within a local network segment or VLAN.</p><p>A router forwards packets between IP networks, a cable modem connects to a provider's coax network, and a load balancer distributes client requests across servers.</p>"
    },
    {
      n: 39,
      prompt: "<p>A workstation gets a blue screen during startup after a new driver was installed. What should the technician try FIRST?</p>",
      choices: ["Replace the CPU", "Delete all user profiles", "Boot to recovery or Safe Mode and roll back the driver", "Upgrade the monitor firmware"],
      answer: 2,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.3",
      difficulty: "medium",
      explanation: "<p>A blue screen immediately after a driver change strongly suggests a bad driver. Booting to recovery or Safe Mode and rolling back or removing the driver targets the recent change with minimal data risk.</p><p>Replacing the CPU is not supported by the symptom, deleting profiles is destructive and unrelated, and monitor firmware would not normally cause a Windows startup stop error.</p>"
    },
    {
      n: 40,
      prompt: "<p>A retailer's website automatically adds web servers during a holiday traffic spike and removes them when demand falls. Which cloud characteristic is demonstrated?</p>",
      choices: ["Measured service", "Community deployment", "Offline synchronization", "Rapid elasticity"],
      answer: 3,
      topic: "Virtualization and Cloud Computing",
      objective: "4.1",
      difficulty: "medium",
      explanation: "<p>Rapid elasticity is the cloud capability to quickly scale resources out or in based on demand, often appearing nearly unlimited to the customer.</p><p>Measured service is usage-based metering, community deployment describes a shared cloud for organizations with common needs, and offline synchronization concerns file availability rather than compute scaling.</p>"
    },
    {
      n: 41,
      prompt: "<p>A motherboard has four DDR4 DIMM slots and supports dual-channel memory. Which installation is BEST for two identical modules?</p>",
      choices: ["Install both modules in the paired color-coded slots recommended by the manual", "Install both modules next to each other in slots 1 and 2 on every board", "Install one DIMM and one SODIMM to balance channels", "Install modules of different capacities for interleaving"],
      answer: 0,
      topic: "Hardware",
      objective: "3.2",
      difficulty: "hard",
      explanation: "<p>Dual-channel boards require modules in the correct paired slots, often color-coded or labeled A2/B2, so the motherboard manual is the authoritative source.</p><p>Adjacent slots are not always a channel pair, SODIMM is a laptop form factor and will not fit desktop DIMM slots, and mismatched capacities can reduce or complicate dual-channel operation.</p>"
    },
    {
      n: 42,
      prompt: "<p>A network printer is configured manually with IP address 192.168.10.25/24. Users on 192.168.20.0/24 cannot print to it, but local users can. Which setting is most likely missing or incorrect?</p>",
      choices: ["DNS suffix", "SNMP community string", "Default gateway", "Duplex setting"],
      answer: 2,
      topic: "Networking",
      objective: "2.5",
      difficulty: "medium",
      explanation: "<p>A device can communicate locally without a gateway, but it needs the correct default gateway to return traffic to other subnets.</p><p>A DNS suffix affects name lookup, an SNMP community string affects monitoring, and a duplex setting mismatch would usually affect local link performance as well.</p>"
    },
    {
      n: 43,
      prompt: "<p>A company uses MDM to ensure phones require passcodes, can be remotely wiped, and receive Wi-Fi profiles automatically. Which mobile concept is being used?</p>",
      choices: ["Locator service", "Mobile device management policy enforcement", "PRL update", "Baseband firmware unlock"],
      answer: 1,
      topic: "Mobile Devices",
      objective: "1.5",
      difficulty: "easy",
      explanation: "<p>MDM centrally enforces mobile policies such as passcode requirements, remote wipe, app restrictions, certificates, and Wi-Fi or VPN profiles.</p><p>Locator service finds a device, a PRL update relates to preferred roaming lists on some cellular networks, and baseband firmware controls cellular radio functions rather than enterprise policy deployment.</p>"
    },
    {
      n: 44,
      prompt: "<p>A printout from a laser printer has a single vertical white line from top to bottom. Which cause is most likely?</p>",
      choices: ["Low fuser temperature", "Blocked laser path or damaged drum area", "Wrong default gateway", "Incorrect paper tray size"],
      answer: 1,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.6",
      difficulty: "medium",
      explanation: "<p>A vertical white line usually means toner is not being placed on that strip of the page, often due to a blocked laser/scanner path, contaminated cartridge, or damaged drum.</p><p>Low fuser temperature causes smearing or loose toner, a wrong gateway affects network printing access, and paper tray size settings cause scaling or feed issues rather than a consistent white line.</p>"
    },
    {
      n: 45,
      prompt: "<p>Which connector is most commonly used for Ethernet twisted-pair network cables?</p>",
      choices: ["RJ45", "RJ11", "LC", "F-type"],
      answer: 0,
      topic: "Hardware",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>RJ45 is the common 8-position modular connector used for Ethernet over twisted-pair copper cabling.</p><p>RJ11 is used for telephone lines, LC is a small fiber connector, and F-type is used with coaxial cable for cable TV or broadband.</p>"
    },
    {
      n: 46,
      prompt: "<p>Which protocol uses UDP ports 67 and 68 to assign IP configuration to clients?</p>",
      choices: ["DNS", "DHCP", "LDAP", "IMAP"],
      answer: 1,
      topic: "Networking",
      objective: "2.1",
      difficulty: "easy",
      explanation: "<p>DHCP uses UDP 67 on the server side and UDP 68 on the client side to lease IP addresses and related network settings.</p><p>DNS usually uses port 53, LDAP uses port 389, and IMAP uses port 143 for email retrieval.</p>"
    },
    {
      n: 47,
      prompt: "<p>A technician receives a ticket that a computer cannot reach the Internet. According to the CompTIA troubleshooting methodology, what should the technician do FIRST?</p>",
      choices: ["Establish a theory of probable cause", "Implement preventive measures", "Document findings and outcomes", "Identify the problem by gathering information"],
      answer: 3,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.1",
      difficulty: "hard",
      explanation: "<p>The first step is to identify the problem, which includes questioning the user, identifying symptoms, determining recent changes, and gathering information before forming theories.</p><p>Establishing a theory is step two, implementing preventive measures occurs during verification after the fix, and documenting findings is the final step.</p>"
    },
    {
      n: 48,
      prompt: "<p>A technician must connect a laptop to an older projector that accepts only analog video. Which connector should be used?</p>",
      choices: ["HDMI", "DisplayPort", "USB-C", "VGA"],
      answer: 3,
      topic: "Hardware",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>VGA carries analog video and is commonly found on older projectors and displays.</p><p>HDMI and DisplayPort are digital video interfaces, and USB-C can carry video only when the port and adapter support the appropriate alternate mode.</p>"
    },
    {
      n: 49,
      prompt: "<p>An organization builds a cloud environment used only by several hospitals that share regulatory and security requirements. Which deployment model is this?</p>",
      choices: ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"],
      answer: 3,
      topic: "Virtualization and Cloud Computing",
      objective: "4.1",
      difficulty: "hard",
      explanation: "<p>A community cloud is shared by multiple organizations with common requirements, such as regulatory, mission, or security needs.</p><p>Public cloud is open to many customers, private cloud is dedicated to one organization, and hybrid cloud combines two or more cloud deployment models with integration between them.</p>"
    },
    {
      n: 50,
      prompt: "<p>Which wireless standard introduced Wi-Fi 6 and commonly supports both 2.4 GHz and 5 GHz operation?</p>",
      choices: ["802.11g", "802.11n", "802.11ax", "802.11a"],
      answer: 2,
      topic: "Networking",
      objective: "2.3",
      difficulty: "medium",
      explanation: "<p>802.11ax is marketed as Wi-Fi 6 and improves efficiency and throughput on 2.4 GHz and 5 GHz networks.</p><p>802.11g is 2.4 GHz and up to 54 Mbps, 802.11n is Wi-Fi 4 on 2.4/5 GHz, and 802.11a is 5 GHz and up to 54 Mbps.</p>"
    },
    {
      n: 51,
      prompt: "<p>A user wants photos, contacts, and calendar entries to appear on a phone, tablet, and laptop using the same account. Which configuration provides this?</p>",
      choices: ["Disable cellular data", "Enable account-based synchronization", "Enable airplane mode", "Reset network settings"],
      answer: 1,
      topic: "Mobile Devices",
      objective: "1.5",
      difficulty: "easy",
      explanation: "<p>Account-based synchronization uses a cloud or enterprise account to sync selected data types such as contacts, calendar, photos, email, and notes across devices.</p><p>Disabling cellular data can prevent syncing off Wi-Fi, airplane mode disables radios, and resetting network settings does not configure cross-device data synchronization.</p>"
    },
    {
      n: 52,
      prompt: "<p>A user reports poor VoIP call quality. Pings show low average latency, but packet delay varies widely from one packet to the next. Which metric is the main problem?</p>",
      choices: ["Jitter", "Throughput", "Signal attenuation", "Port speed"],
      answer: 0,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.7",
      difficulty: "hard",
      explanation: "<p>Jitter is variation in packet delay. Voice and video streams are sensitive to jitter even when average latency looks acceptable.</p><p>Throughput measures data rate, signal attenuation is loss of signal strength over distance or media, and port speed is the negotiated link rate rather than delay variation.</p>"
    },
    {
      n: 53,
      prompt: "<p>A technician needs to install a laptop memory module. Which form factor should be selected?</p>",
      choices: ["Full-size DIMM", "PCIe x16", "SODIMM", "M.2 2280"],
      answer: 2,
      topic: "Hardware",
      objective: "3.2",
      difficulty: "medium",
      explanation: "<p>Laptops commonly use SODIMM memory modules, which are smaller than desktop DIMMs and fit laptop memory slots.</p><p>Full-size DIMMs are for desktops and servers, PCIe x16 is an expansion slot for cards such as GPUs, and M.2 2280 describes a common storage module size rather than RAM.</p>"
    },
    {
      n: 54,
      prompt: "<p>Which connector is commonly used with fiber patch cables and has a small form factor latch?</p>",
      choices: ["ST", "LC", "RJ11", "F-type"],
      answer: 1,
      topic: "Networking",
      objective: "2.2",
      difficulty: "easy",
      explanation: "<p>LC is a small form factor fiber connector with a latch, commonly used in modern switches, patch panels, and transceivers.</p><p>ST is an older round bayonet-style fiber connector, RJ11 is for telephone copper wiring, and F-type is for coaxial cable.</p>"
    },
    {
      n: 55,
      prompt: "<p>A RAID 5 array with three drives reports one failed drive, but data is still available. What should the technician do NEXT?</p>",
      choices: ["Replace the failed drive and rebuild the array", "Convert the array to RAID 0", "Ignore the alert because RAID 5 tolerates two failures", "Remove a second drive to test parity"],
      answer: 0,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.3",
      difficulty: "hard",
      explanation: "<p>RAID 5 can tolerate one failed drive, so the next step is to replace the failed drive with a suitable replacement and rebuild while data is still available.</p><p>Converting to RAID 0 removes fault tolerance, RAID 5 does not tolerate two failed drives, and removing another drive during a degraded state can cause data loss.</p>"
    },
    {
      n: 56,
      prompt: "<p>A technician compares USB standards. Which maximum data rate is associated with USB 3.2 Gen 2x2?</p>",
      choices: ["480 Mbps", "5 Gbps", "10 Gbps", "20 Gbps"],
      answer: 3,
      topic: "Hardware",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>USB 3.2 Gen 2x2 uses two 10 Gbps lanes for a maximum theoretical data rate of 20 Gbps.</p><p>480 Mbps is USB 2.0, 5 Gbps is USB 3.2 Gen 1, and 10 Gbps is USB 3.2 Gen 2.</p>"
    },
    {
      n: 57,
      prompt: "<p>A smartphone has a reversible USB-C port instead of a vendor-specific connector. Which older Apple mobile connector did USB-C commonly replace on recent iPhones and iPads?</p>",
      choices: ["Micro-USB", "Lightning", "Mini-USB", "eSATA"],
      answer: 1,
      topic: "Mobile Devices",
      objective: "1.3",
      difficulty: "medium",
      explanation: "<p>Lightning was Apple's proprietary reversible mobile connector before many newer devices moved to USB-C for charging, data, and accessories.</p><p>Micro-USB and Mini-USB were common on older non-Apple devices, while eSATA is an external storage interface rather than a phone connector.</p>"
    },
    {
      n: 58,
      prompt: "<p>A printer produces pages filled with random symbols after a driver update. Other printers work normally. What is the BEST next step?</p>",
      choices: ["Replace the toner cartridge", "Clean the pickup rollers", "Assign a static IP address", "Install the correct printer driver or language"],
      answer: 3,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.6",
      difficulty: "hard",
      explanation: "<p>Garbled output often means the printer is receiving data in an unsupported page description language or from the wrong driver. Installing the correct driver is the targeted fix after a driver change.</p><p>A toner cartridge affects print density, pickup rollers affect paper feed, and a static IP addresses connectivity but not random symbols from a bad driver.</p>"
    },
    {
      n: 59,
      prompt: "<p>Multiple users in one area report no wireless connectivity after an access point was moved above a drop ceiling near fluorescent ballasts. What should the technician check FIRST?</p>",
      choices: ["Access point placement and sources of interference", "The users' email passwords", "The WAN provider's BGP routes", "The web server certificate"],
      answer: 0,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.7",
      difficulty: "medium",
      explanation: "<p>Because the failure began after the AP was physically moved, the first check should be placement, power, cabling, and interference from nearby equipment or building materials.</p><p>Email passwords affect authentication to mail, BGP routes are an ISP or enterprise routing concern, and a web server certificate would not prevent association to Wi-Fi.</p>"
    },
    {
      n: 60,
      prompt: "<p>A desktop repeatedly loses the date and time after being unplugged overnight, but otherwise runs normally. Which component should be replaced?</p>",
      choices: ["Power supply fan", "CPU heatsink", "CMOS battery", "System RAM"],
      answer: 2,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.2",
      difficulty: "hard",
      explanation: "<p>The CMOS battery maintains real-time clock and firmware settings when the computer is disconnected from power. Losing date and time after being unplugged is a classic weak CMOS battery symptom.</p><p>A power supply fan affects cooling, a CPU heatsink affects processor temperature, and system RAM failures usually cause crashes, memory errors, or POST issues rather than clock reset only.</p>"
    }
  ] } ]
};
