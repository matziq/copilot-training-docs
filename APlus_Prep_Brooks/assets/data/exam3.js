window.AP_DATA = window.AP_DATA || {};

window.AP_DATA.exam3 = {
  id: "exam3",
  name: "Core 1 (220-1101) \u2014 Practice Exam 3",
  timeMinutes: 60,
  units: [ { title: "", html: "", questions: [
    {
      n: 1,
      prompt: "<p>A user connects a USB-C docking station to a laptop. The external monitor works, but Ethernet and USB devices on the dock do not. Other USB-C chargers work with the same port. Which laptop feature is MOST likely required for all dock functions?</p>",
      choices: ["Qi wireless charging support", "A SIM or eSIM profile", "USB-C with Thunderbolt or DisplayPort alternate mode plus data support", "A removable 2.5-inch drive bay"],
      answer: 2,
      topic: "Mobile Devices",
      objective: "1.3",
      difficulty: "medium",
      explanation: "<p>USB-C is only the connector shape; full-feature docks need the port to carry video and high-speed data, often through Thunderbolt or USB-C alternate modes. A charge-only or limited data port can power devices or drive one function while other dock features fail.</p><p>Qi wireless charging is unrelated to wired dock data, a SIM or eSIM profile only affects cellular service, and a removable 2.5-inch drive bay does not add USB-C dock capabilities.</p>"
    },
    {
      n: 2,
      prompt: "<p>A remote user reports that email arrives on the laptop normally, but every message they try to send sits in the outbox and eventually fails. They are on a hotel guest network. Which port is MOST likely being blocked?</p>",
      choices: ["587", "993", "143", "110"],
      answer: 0,
      topic: "Networking",
      objective: "2.1",
      difficulty: "medium",
      explanation: "<p>Sending mail is SMTP, and a mail client submits outgoing mail on TCP 587. Because inbound mail is arriving normally, the receiving half of the account configuration is proven good and the fault is isolated to outbound submission. Hotel and cafe guest networks very commonly block outbound mail submission to keep spam from originating in their address space.</p><p>993 is IMAP over SSL and 143 is plain IMAP \u2014 both handle receiving, which already works, so neither can be the blocked port. 110 is POP3, also a receiving protocol. The trap is recognizing the question as &quot;a mail port&quot; and picking one without first asking which direction is actually broken.</p>"
    },
    {
      n: 3,
      prompt: "<p>A workstation has one 8 GB DDR4 DIMM installed. The motherboard manual recommends matched modules in paired slots for best graphics performance. What is the main benefit of adding an identical 8 GB DIMM in the correct paired slot?</p>",
      choices: ["The RAM will become ECC memory", "The system will use registered memory timing", "The memory speed rating will double in MHz", "The memory controller can operate in dual-channel mode"],
      answer: 3,
      topic: "Hardware",
      objective: "3.2",
      difficulty: "medium",
      explanation: "<p>Installing matched DIMMs in the correct slots allows the memory controller to access two channels at once, increasing memory bandwidth. Integrated graphics often benefits because it uses system RAM.</p><p>Adding a second consumer DIMM does not convert RAM to ECC, does not make it registered, and does not double the module clock speed in MHz.</p>"
    },
    {
      n: 4,
      prompt: "<p>A developer wants to run several isolated Linux test systems directly on a spare workstation with no host desktop operating system. The systems must stay running after the developer logs out and should have minimal host overhead. Which solution is BEST?</p>",
      choices: ["Install a Type 2 hypervisor on Windows", "Install a Type 1 hypervisor on the workstation", "Use application streaming for each Linux shell", "Use a browser sandbox for each test"],
      answer: 1,
      topic: "Virtualization and Cloud Computing",
      objective: "4.2",
      difficulty: "hard",
      explanation: "<p>A Type 1 hypervisor runs directly on the hardware and is designed to host VMs with low overhead and without relying on a logged-in desktop OS. It is the best fit for persistent lab VMs on dedicated hardware.</p><p>A Type 2 hypervisor depends on a host OS, application streaming does not provide full Linux systems, and a browser sandbox isolates web content rather than complete virtual machines.</p>"
    },
    {
      n: 5,
      prompt: "<p>A desktop sometimes shuts off instantly when a user starts a GPU-heavy game. Event logs show unexpected power loss, temperatures are normal, and the system restarts only after the power switch on the PSU is toggled. Which component should the technician test FIRST?</p>",
      choices: ["Power supply", "CMOS battery", "System RAM", "SATA data cable"],
      answer: 0,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.2",
      difficulty: "medium",
      explanation: "<p>Sudden power-off under high load with normal temperatures strongly points to a PSU that cannot provide stable power on the needed rails. A PSU tester or known-good PSU is the most direct next diagnostic step.</p><p>A CMOS battery usually causes time or BIOS setting loss, RAM problems more often cause POST errors or crashes with memory faults, and a SATA data cable would cause storage errors rather than total power loss.</p>"
    },
    {
      n: 6,
      prompt: "<p>A small office wants to separate guest Wi-Fi traffic from the accounting PCs while using the same Internet connection. Which configuration on the switch and access point BEST supports this design?</p>",
      choices: ["Enable STP on every access port", "Configure a DMZ for all wireless clients", "Map the guest SSID to a separate VLAN", "Disable DHCP on the router"],
      answer: 2,
      topic: "Networking",
      objective: "2.6",
      difficulty: "medium",
      explanation: "<p>A VLAN logically separates guest clients from internal systems while sharing physical infrastructure and an Internet uplink. Mapping the guest SSID to its own VLAN is a standard small-business design.</p><p>STP prevents switching loops but does not segment guests, a DMZ exposes selected resources rather than isolating Wi-Fi users, and disabling DHCP would break address assignment instead of providing separation.</p>"
    },
    {
      n: 7,
      prompt: "<p>Which storage interface is designed for external SATA drives and preserves SATA command behavior outside the case?</p>",
      choices: ["U.2", "eSATA", "SAS", "NVMe"],
      answer: 1,
      topic: "Hardware",
      objective: "3.3",
      difficulty: "easy",
      explanation: "<p>eSATA is the external SATA interface and lets an external drive communicate using SATA signaling rather than USB mass-storage translation. It was common for external drives that needed native SATA performance.</p><p>U.2 is an internal cabled NVMe/SAS-style connector, SAS is a server storage interface, and NVMe is a protocol usually carried over PCIe rather than an external SATA connector.</p>"
    },
    {
      n: 8,
      prompt: "<p>A phone can browse the web on Wi-Fi but cannot send or receive MMS messages on cellular data after a carrier change. Calls and SMS work. Which setting should be verified FIRST?</p>",
      choices: ["Exchange ActiveSync server name", "Bluetooth pairing code", "Screen timeout value", "APN settings for the new carrier"],
      answer: 3,
      topic: "Mobile Devices",
      objective: "1.4",
      difficulty: "medium",
      explanation: "<p>APN settings tell a mobile device how to reach the carrier packet data network for cellular Internet and MMS. After changing carriers, an incorrect APN commonly leaves calls and SMS working while MMS or mobile data fails.</p><p>Exchange ActiveSync affects corporate mail sync, a Bluetooth pairing code affects local accessories, and screen timeout has no relationship to cellular data services.</p>"
    },
    {
      n: 9,
      prompt: "<p>A laser printer produces pages where toner wipes off easily and the image looks correct before smearing. Which part is MOST likely failing?</p>",
      choices: ["Pickup roller", "Transfer belt", "Fuser assembly", "Duplexing unit"],
      answer: 2,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.6",
      difficulty: "hard",
      explanation: "<p>The fuser uses heat and pressure to bond toner to the page. If the image forms but toner wipes off, the fuser is not properly heating or applying pressure.</p><p>A pickup roller causes feed or jam problems, a transfer belt problem usually causes missing or repeated image defects before fusing, and a duplexing unit affects two-sided paper handling rather than toner adhesion.</p>"
    },
    {
      n: 10,
      prompt: "<p>A technician is selecting memory for a rack server that must detect and correct single-bit memory errors and support very large RAM capacity. Which memory type is MOST appropriate?</p>",
      choices: ["Registered ECC DIMMs", "Unbuffered non-ECC SO-DIMMs", "Single-channel DDR3 DIMMs", "GDDR6 graphics memory"],
      answer: 0,
      topic: "Hardware",
      objective: "3.2",
      difficulty: "medium",
      explanation: "<p>Servers commonly use registered ECC DIMMs because ECC can correct certain memory errors and registered modules reduce electrical load to support more DIMMs and higher capacity. This matches the reliability and capacity requirements.</p><p>Unbuffered non-ECC SO-DIMMs are laptop-style consumer memory, single-channel DDR3 describes an older channel arrangement rather than server reliability, and GDDR6 is graphics card memory.</p>"
    },
    {
      n: 11,
      prompt: "<p>A technician must identify the office where an unlabeled Ethernet cable terminates. The cable is already patched into a wall jack but not connected to a switch. Which tool pair is BEST?</p>",
      choices: ["Loopback plug and Wi-Fi analyzer", "Multimeter and punchdown tool", "Crimper and cable stripper", "Toner probe and tone generator"],
      answer: 3,
      topic: "Networking",
      objective: "2.8",
      difficulty: "medium",
      explanation: "<p>A tone generator sends a signal on the cable and a toner probe detects it at the far end, making it the best choice for tracing an unlabeled cable path. This is especially useful when the cable is not active on a switch.</p><p>A loopback plug tests a port, a Wi-Fi analyzer checks RF networks, a multimeter cannot efficiently trace Ethernet runs through walls, and a crimper or stripper is for terminating cable.</p>"
    },
    {
      n: 12,
      prompt: "<p>A PC powers on with fans spinning but no video and no POST beeps. The technician reseats RAM and verifies the monitor and cable on another PC. According to the CompTIA troubleshooting methodology, what should the technician do NEXT?</p>",
      choices: ["Document findings and close the ticket", "Establish a theory of probable cause", "Implement a motherboard replacement", "Verify full system functionality"],
      answer: 1,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.1",
      difficulty: "hard",
      explanation: "<p>After identifying the problem and gathering initial information, the next formal step is to establish a theory of probable cause. The technician can then test theories such as PSU, motherboard, CPU, or RAM failure.</p><p>Documenting findings is the final step, replacing the motherboard before testing is premature, and verifying full functionality happens after a solution has been implemented.</p>"
    },
    {
      n: 13,
      prompt: "<p>A company runs a web application in a cloud platform. During seasonal demand, extra instances are automatically added and billing increases only for the additional resources used. Which cloud characteristic is being demonstrated?</p>",
      choices: ["Rapid elasticity with metered utilization", "Community cloud isolation", "Application virtualization", "Locally attached storage"],
      answer: 0,
      topic: "Virtualization and Cloud Computing",
      objective: "4.1",
      difficulty: "medium",
      explanation: "<p>Rapid elasticity allows resources to scale up or down quickly, and metered utilization means usage is tracked for billing. The scenario describes both automatic scaling and pay-for-use behavior.</p><p>A community cloud is a deployment model, application virtualization packages apps for clients, and locally attached storage is not a cloud scaling characteristic.</p>"
    },
    {
      n: 14,
      prompt: "<p>A desktop has an M.2 slot labeled M-key PCIe x4 only. Which drive should be installed for the best compatibility and performance?</p>",
      choices: ["M.2 SATA B+M-key SSD", "2.5-inch SATA SSD with adapter cable", "M.2 NVMe M-key SSD", "mSATA SSD"],
      answer: 2,
      topic: "Hardware",
      objective: "3.3",
      difficulty: "medium",
      explanation: "<p>An M-key PCIe x4 M.2 slot is intended for NVMe SSDs using PCIe lanes, so an M.2 NVMe M-key drive is the correct match and provides much higher throughput than SATA. Keying and protocol must both match.</p><p>An M.2 SATA B+M-key drive may physically differ and requires SATA signaling, a 2.5-inch SATA SSD needs a SATA interface rather than M.2 PCIe, and mSATA is a different older form factor.</p>"
    },
    {
      n: 15,
      prompt: "<p>Which laptop component commonly stores a removable Wi-Fi card using a small internal expansion slot?</p>",
      choices: ["Digitizer", "Mini PCIe or M.2 slot", "Inverter", "Touchpad ribbon"],
      answer: 1,
      topic: "Mobile Devices",
      objective: "1.1",
      difficulty: "easy",
      explanation: "<p>Laptop Wi-Fi cards are commonly installed in Mini PCIe on older systems or M.2 E-key slots on newer systems. These slots provide internal expansion for wireless adapters.</p><p>A digitizer handles touch input, an inverter powers older CCFL backlights, and a touchpad ribbon connects the pointing device rather than hosting a wireless card.</p>"
    },    {
      n: 16,
      prompt: "<p>A user reports that a laptop display is extremely dim but a faint image is visible with a flashlight. An external monitor works normally. The laptop uses an older CCFL-backlit panel. Which component is MOST likely defective?</p>",
      choices: ["GPU", "LCD panel glass", "Wi-Fi antenna", "Backlight inverter"],
      answer: 3,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.4",
      difficulty: "hard",
      explanation: "<p>A faint image on an older CCFL display indicates the LCD is producing an image but the backlight is not illuminating. CCFL panels use an inverter to power the backlight, making it the likely failure.</p><p>A GPU problem would usually affect external video too, panel glass damage would show cracks or blotches, and a Wi-Fi antenna has no role in display brightness.</p>"
    },
    {
      n: 17,
      prompt: "<p>A wired client has IP address 169.254.45.10 with subnet mask 255.255.0.0. Other clients on the same switch have 192.168.10.x addresses and work normally. What is the BEST first area to investigate for this client?</p>",
      choices: ["DHCP address assignment", "DNS forward lookup zone", "Default gateway route on the firewall", "HTTPS certificate trust"],
      answer: 0,
      topic: "Networking",
      objective: "2.4",
      difficulty: "medium",
      explanation: "<p>An address in 169.254.0.0/16 is APIPA, which Windows assigns when it cannot obtain a DHCP lease. Since other clients work, focus on this client's DHCP path, cable, port, VLAN, or NIC configuration.</p><p>DNS issues do not cause APIPA, the gateway is not used until after the client has a valid local address, and HTTPS certificate trust would affect secure websites rather than IP assignment.</p>"
    },
    {
      n: 18,
      prompt: "<p>Several users can reach websites by IP address but not by name. They can ping the default gateway and 8.8.8.8. Which service is MOST likely failing?</p>",
      choices: ["DHCP", "NTP", "DNS", "SNMP"],
      answer: 2,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.7",
      difficulty: "hard",
      explanation: "<p>If IP connectivity works but hostnames do not resolve, the failure is most likely DNS. The gateway and Internet path are functioning because users can reach external IP addresses.</p><p>DHCP would affect address assignment, NTP would affect time synchronization, and SNMP is used for monitoring rather than name resolution.</p>"
    },
    {
      n: 19,
      prompt: "<p>A color laser printer is leaving a repeating colored mark at the same interval down every page. Which item should the technician inspect FIRST?</p>",
      choices: ["Print server queue permissions", "USB cable shielding", "Paper tray size guides", "Imaging drum or toner cartridge for that color"],
      answer: 3,
      topic: "Hardware",
      objective: "3.7",
      difficulty: "medium",
      explanation: "<p>Repeating defects at a regular interval usually correspond to a rotating component such as a drum or toner cartridge roller. If the mark is one color, inspect the cartridge or imaging unit for that color first.</p><p>Queue permissions affect who can print, USB shielding would cause communication errors, and tray guides usually cause skew or jams rather than periodic image defects.</p>"
    },
    {
      n: 20,
      prompt: "<p>A workstation randomly reboots after a CPU upgrade. The BIOS reports CPU temperatures quickly climbing above safe limits at idle. Which action is MOST appropriate?</p>",
      choices: ["Replace the SATA SSD", "Reinstall the heat sink with proper thermal paste", "Disable dual-channel memory", "Clear the print spooler"],
      answer: 1,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.2",
      difficulty: "hard",
      explanation: "<p>Rapid temperature rise after CPU replacement points to poor heat transfer, such as missing paste, too much paste, uneven mounting, or a disconnected CPU fan. Reinstalling the heat sink correctly addresses the likely cause.</p><p>A SATA SSD does not control CPU thermals, disabling dual-channel memory will not cool the processor, and clearing the print spooler is unrelated.</p>"
    },
    {
      n: 21,
      prompt: "<p>Which IPv4 prefix length is equivalent to subnet mask 255.255.255.0?</p>",
      choices: ["/16", "/30", "/24", "/8"],
      answer: 2,
      topic: "Networking",
      objective: "2.6",
      difficulty: "easy",
      explanation: "<p>255.255.255.0 has twenty-four binary 1 bits in the subnet mask, so it is written as /24 in CIDR notation. It normally provides 254 usable host addresses in a single subnet.</p><p>/16 maps to 255.255.0.0, /30 maps to 255.255.255.252 for small point-to-point networks, and /8 maps to 255.0.0.0.</p>"
    },
    {
      n: 22,
      prompt: "<p>A user wants their tablet photos, contacts, and calendar to appear automatically on a new phone using the same vendor account. Which feature should be configured?</p>",
      choices: ["Cloud synchronization", "NFC payment tokenization", "Wi-Fi Direct printing", "Hotspot tethering"],
      answer: 0,
      topic: "Mobile Devices",
      objective: "1.5",
      difficulty: "medium",
      explanation: "<p>Cloud synchronization uses the user's account to sync data such as photos, contacts, calendars, and documents between mobile devices. It is the correct feature for automatic cross-device availability.</p><p>NFC payment tokenization supports tap-to-pay, Wi-Fi Direct printing connects to printers, and hotspot tethering shares cellular data with other devices.</p>"
    },
    {
      n: 23,
      prompt: "<p>A technician is installing a high-end GPU that requires two 8-pin PCIe power connectors. The PSU has only one native 8-pin PCIe connector and several SATA power connectors. What is the BEST recommendation?</p>",
      choices: ["Use two SATA-to-PCIe adapters from the same cable", "Replace the PSU with one that has the required PCIe connectors and capacity", "Plug the second connector into the CPU EPS12V socket", "Run the GPU without the second connector if the system boots"],
      answer: 1,
      topic: "Hardware",
      objective: "3.4",
      difficulty: "hard",
      explanation: "<p>A GPU should be powered by a PSU that provides the proper PCIe connectors and enough wattage/current on the 12 V rail. Replacing the PSU avoids overloaded adapters and unstable power delivery.</p><p>SATA-to-PCIe adapters can overheat or overload wiring, the CPU EPS12V connector is not a GPU PCIe power connector, and running without required power can damage hardware or cause crashes.</p>"
    },
    {
      n: 24,
      prompt: "<p>A company lets users run a legacy Windows application from a central server without installing it locally. The application window appears on the user's desktop, but processing occurs on the server. Which technology is this?</p>",
      choices: ["VDI with a full persistent desktop", "Bare-metal recovery", "Container orchestration", "Application virtualization"],
      answer: 3,
      topic: "Virtualization and Cloud Computing",
      objective: "4.2",
      difficulty: "medium",
      explanation: "<p>Application virtualization or remote application publishing presents an app to the user while the app is isolated or executed centrally. It avoids local installation while still giving the user an application window.</p><p>VDI provides an entire virtual desktop, bare-metal recovery restores a system image, and container orchestration manages containerized services rather than publishing one legacy desktop app.</p>"
    },
    {
      n: 25,
      prompt: "<p>A technician is configuring a SOHO router for a home office. Which change BEST reduces the chance that nearby attackers can manage the router?</p>",
      choices: ["Enable UPnP for all clients", "Use WEP for compatibility", "Disable remote administration and change the default admin password", "Place the office PC in the DMZ"],
      answer: 2,
      topic: "Networking",
      objective: "2.5",
      difficulty: "medium",
      explanation: "<p>Changing default credentials and disabling remote administration remove two common paths attackers use to take over SOHO routers. Management should be limited to trusted local access when possible.</p><p>UPnP can open ports automatically, WEP is obsolete and weak, and a DMZ exposes a host to inbound traffic instead of hardening router management.</p>"
    },
    {
      n: 26,
      prompt: "<p>A RAID 5 array with four drives loses one drive. Before the replacement arrives, another drive starts reporting unrecoverable read errors during heavy use. What is the main risk?</p>",
      choices: ["The array may fail because RAID 5 can tolerate only one drive failure", "The array will automatically convert to RAID 10", "The hot spare will increase usable capacity", "The file system will become read-only by design"],
      answer: 0,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.3",
      difficulty: "hard",
      explanation: "<p>RAID 5 uses single parity and can survive one drive failure. A second failed or unreadable drive during degraded operation or rebuild can make the array unrecoverable.</p><p>RAID 5 does not automatically convert to RAID 10, a hot spare does not increase usable capacity, and read-only behavior is not the core RAID 5 failure risk.</p>"
    },
    {
      n: 27,
      prompt: "<p>A motherboard has a 24-pin ATX power connector, a 8-pin CPU EPS connector, four DIMM slots, and seven expansion slots. Which form factor is MOST likely?</p>",
      choices: ["Mini-ITX", "SODIMM", "Micro-ATX", "ATX"],
      answer: 3,
      topic: "Hardware",
      objective: "3.4",
      difficulty: "medium",
      explanation: "<p>A full ATX motherboard commonly supports up to seven expansion slots and uses standard ATX power connectors. The described slot count strongly indicates ATX rather than a smaller board.</p><p>Mini-ITX is much smaller with one expansion slot, SODIMM is a memory module type, and Micro-ATX normally has fewer expansion slots than full ATX.</p>"
    },
    {
      n: 28,
      prompt: "<p>A user says Wi-Fi drops only in a conference room. A Wi-Fi analyzer shows many neighboring networks on 2.4 GHz channels 4, 5, and 6. Which change is BEST?</p>",
      choices: ["Increase the channel width to 80 MHz on 2.4 GHz", "Move the AP to channel 1 or 11 and consider 5 GHz or 6 GHz coverage", "Disable WPA3 and use open authentication", "Lower the DHCP lease time to 5 minutes"],
      answer: 1,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.7",
      difficulty: "hard",
      explanation: "<p>In 2.4 GHz Wi-Fi, the non-overlapping channels are 1, 6, and 11. With interference around 4 through 6, moving to a cleaner non-overlapping channel and using 5 GHz or 6 GHz when available reduces contention.</p><p>80 MHz channel width is inappropriate for 2.4 GHz, open authentication weakens security, and DHCP lease time does not fix RF interference.</p>"
    },
    {
      n: 29,
      prompt: "<p>Which mobile display component detects finger input on a touchscreen?</p>",
      choices: ["Digitizer", "Backlight", "Inverter", "Bezel"],
      answer: 0,
      topic: "Mobile Devices",
      objective: "1.2",
      difficulty: "easy",
      explanation: "<p>The digitizer is the touch-sensitive layer that detects finger or stylus input and reports coordinates to the device. It may be bonded to the glass or display assembly.</p><p>The backlight illuminates the display, an inverter powers older CCFL backlights, and the bezel is the frame around the screen.</p>"
    },
    {
      n: 30,
      prompt: "<p>A technician replaces a failed switch port connection by moving a user's cable to another switch port. The link comes up and the user can reach network resources. What should the technician do NEXT according to the troubleshooting methodology?</p>",
      choices: ["Establish a new theory of probable cause", "Question the user again before testing", "Verify full system functionality and implement preventive measures if applicable", "Document findings before testing the fix"],
      answer: 2,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.1",
      difficulty: "hard",
      explanation: "<p>After implementing a solution, the next CompTIA step is to verify full system functionality and, if applicable, implement preventive measures. The technician should confirm the user can perform required tasks and consider disabling or labeling the bad port.</p><p>Establishing a theory and questioning the user are earlier steps, and documentation is the final step after verification is complete.</p>"
    },    {
      n: 31,
      prompt: "<p>A company needs a site-to-site encrypted tunnel between two offices across the Internet. Which technology is MOST appropriate?</p>",
      choices: ["VLAN", "VPN", "NAT", "PoE"],
      answer: 1,
      topic: "Networking",
      objective: "2.6",
      difficulty: "medium",
      explanation: "<p>A VPN creates an encrypted tunnel across an untrusted network such as the Internet. Site-to-site VPNs are commonly used to connect office networks securely.</p><p>A VLAN segments a local switched network, NAT translates addresses, and PoE supplies power over Ethernet cabling rather than encryption.</p>"
    },
    {
      n: 32,
      prompt: "<p>A user needs to connect one 4K monitor at 120 Hz and also charge a laptop over the same cable through a dock. Which port type is MOST likely to support high bandwidth video, data, and power delivery together?</p>",
      choices: ["VGA", "USB 2.0 Type-A", "RJ11", "Thunderbolt 4 over USB-C"],
      answer: 3,
      topic: "Hardware",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>Thunderbolt 4 over USB-C supports high-speed data, DisplayPort video tunneling, and USB Power Delivery when implemented by the system and dock. It is intended for high-performance single-cable docking.</p><p>VGA is analog video only, USB 2.0 Type-A lacks the needed video and bandwidth, and RJ11 is a telephone connector.</p>"
    },
    {
      n: 33,
      prompt: "<p>A desktop with an NVMe SSD intermittently shows the boot drive missing after warm restarts. The drive passes a short diagnostic, but SMART logs show increasing media errors and unsafe shutdown counts. What should the technician do FIRST?</p>",
      choices: ["Back up the user's data immediately", "Update the printer driver", "Disable all CPU virtualization extensions", "Replace the monitor cable"],
      answer: 0,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.3",
      difficulty: "hard",
      explanation: "<p>Increasing media errors and intermittent disappearance indicate possible SSD failure or data loss risk. The first priority is to back up user data before running invasive tests or replacing hardware.</p><p>A printer driver, CPU virtualization setting, and monitor cable are unrelated to NVMe storage health and do not protect the user's data.</p>"
    },
    {
      n: 34,
      prompt: "<p>Which cloud service model provides a complete application to users, such as webmail, without requiring the customer to manage the operating system or runtime?</p>",
      choices: ["IaaS", "PaaS", "SaaS", "DaaS"],
      answer: 2,
      topic: "Virtualization and Cloud Computing",
      objective: "4.1",
      difficulty: "easy",
      explanation: "<p>Software as a Service provides a finished application over the network. Users consume the application while the provider manages the underlying infrastructure, platform, and software maintenance.</p><p>IaaS provides infrastructure such as VMs, PaaS provides a platform for deploying code, and DaaS provides hosted desktops rather than a single complete application like webmail.</p>"
    },
    {
      n: 35,
      prompt: "<p>A network printer should always receive the same IP address, but the administrator wants to manage the address centrally from the DHCP server. Which configuration should be used?</p>",
      choices: ["Static IP configured on the printer only", "DHCP reservation based on the printer MAC address", "APIPA address on the printer", "Port forwarding on the router"],
      answer: 1,
      topic: "Networking",
      objective: "2.4",
      difficulty: "medium",
      explanation: "<p>A DHCP reservation maps the printer's MAC address to a consistent IP address while keeping control on the DHCP server. This avoids conflicts and keeps address management centralized.</p><p>A static IP on the printer is not centrally leased, APIPA indicates DHCP failure, and port forwarding exposes services through a router but does not assign a stable LAN address.</p>"
    },
    {
      n: 36,
      prompt: "<p>A company uses MDM to enforce screen lock, encryption, and remote wipe on employee phones. Which additional control specifically separates corporate app data from personal app data?</p>",
      choices: ["PRL update", "Baseband reset", "IMEI filtering", "Mobile application management"],
      answer: 3,
      topic: "Mobile Devices",
      objective: "1.4",
      difficulty: "medium",
      explanation: "<p>Mobile application management controls corporate apps and their data, often using containers, copy-paste restrictions, and selective wipe. It complements MDM by focusing on applications instead of the whole device.</p><p>A PRL update affects roaming lists, a baseband reset affects cellular radio behavior, and IMEI filtering identifies devices but does not separate app data.</p>"
    },
    {
      n: 37,
      prompt: "<p>A technician is connecting a new impact printer used for multipart forms. Which consumable is MOST specific to this printer type?</p>",
      choices: ["Fuser film", "Toner cartridge", "Fabric ribbon", "Resin vat"],
      answer: 2,
      topic: "Hardware",
      objective: "3.5",
      difficulty: "medium",
      explanation: "<p>Impact printers strike pins against a fabric ribbon to transfer ink to paper, which makes them useful for multipart forms. Ribbon replacement is a common maintenance item.</p><p>Fuser film and toner cartridges are laser printer items, and a resin vat belongs to some 3-D printers.</p>"
    },
    {
      n: 38,
      prompt: "<p>A user's PC has a valid IP address, subnet mask, DNS server, and default gateway. The user can print to a local subnet printer but cannot reach any Internet sites by name or IP. Other users are unaffected. Which setting should be checked FIRST?</p>",
      choices: ["Default gateway address on the user's PC", "Toner level in the printer", "Wi-Fi channel width", "DNS MX record"],
      answer: 0,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.7",
      difficulty: "hard",
      explanation: "<p>Being able to reach local subnet resources but not off-subnet IP addresses points to a missing or incorrect default gateway. Since DNS and IP access to the Internet both fail, the gateway is a better first check than name resolution.</p><p>Toner level is unrelated, Wi-Fi channel width would affect wireless connectivity more broadly, and an MX record handles mail routing rather than general Internet access.</p>"
    },
    {
      n: 39,
      prompt: "<p>An inkjet printer prints faded colors after sitting unused for several weeks. The cartridges are not empty. Which maintenance action should be tried FIRST?</p>",
      choices: ["Replace the fuser", "Install a maintenance kit for pickup rollers", "Run a paper calibration for tractor feed", "Run the printhead cleaning utility"],
      answer: 3,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.6",
      difficulty: "hard",
      explanation: "<p>Inkjet nozzles can dry or clog when unused, causing faded or missing colors. The printhead cleaning utility is the least invasive first step when ink remains in the cartridges.</p><p>A fuser is used by laser printers, pickup rollers cause feed issues, and tractor feed calibration applies to impact printers rather than inkjet color output.</p>"
    },
    {
      n: 40,
      prompt: "<p>A new access point supports Wi-Fi 6E. What additional frequency band can compatible clients use compared with Wi-Fi 6 devices that support only 2.4 GHz and 5 GHz?</p>",
      choices: ["900 MHz", "6 GHz", "60 GHz", "1.9 GHz"],
      answer: 1,
      topic: "Networking",
      objective: "2.3",
      difficulty: "medium",
      explanation: "<p>Wi-Fi 6E extends Wi-Fi 6 operation into the 6 GHz band, giving compatible clients access to additional spectrum and channels. This can reduce congestion where 6 GHz is permitted.</p><p>900 MHz is used by some IoT or industrial links, 60 GHz is associated with 802.11ad/ay-style short-range links, and 1.9 GHz is not the Wi-Fi 6E expansion band.</p>"
    },
    {
      n: 41,
      prompt: "<p>A technician needs to terminate solid copper Ethernet cable into a patch panel. Which tool should be used?</p>",
      choices: ["Punchdown tool", "Loopback plug", "PSU tester", "Wi-Fi analyzer"],
      answer: 0,
      topic: "Hardware",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>A punchdown tool seats individual copper conductors into insulation-displacement contacts on a patch panel or keystone jack. It is the correct termination tool for structured cabling.</p><p>A loopback plug tests ports, a PSU tester checks power supplies, and a Wi-Fi analyzer evaluates wireless signals rather than terminating cable.</p>"
    },
    {
      n: 42,
      prompt: "<p>A user reports that a phone became very hot, shut down, and now the rear cover is bulging. What should the technician do FIRST?</p>",
      choices: ["Place the phone in a freezer for 10 minutes", "Connect a higher-wattage charger", "Stop using the device and follow battery safety procedures", "Press the cover flat and reboot"],
      answer: 2,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.5",
      difficulty: "hard",
      explanation: "<p>Bulging after overheating indicates a swollen lithium-ion battery, which is a safety hazard. The technician should stop using or charging the device and follow approved handling, isolation, and replacement procedures.</p><p>Freezing can cause condensation and damage, a higher-wattage charger increases risk, and pressing the cover can puncture or stress the battery.</p>"
    },
    {
      n: 43,
      prompt: "<p>Which short-range technology is commonly used for tap-to-pay transactions?</p>",
      choices: ["LTE", "GPS", "802.11ax", "NFC"],
      answer: 3,
      topic: "Mobile Devices",
      objective: "1.4",
      difficulty: "easy",
      explanation: "<p>NFC is a very short-range radio technology used for contactless payments, badge taps, and quick pairing. Its limited range is appropriate for tap-to-pay workflows.</p><p>LTE is cellular data, GPS is satellite positioning, and 802.11ax is Wi-Fi 6 networking rather than payment tap communication.</p>"
    },
    {
      n: 44,
      prompt: "<p>A team keeps creating test VMs and forgetting to delete them, causing storage and licensing costs to rise. Which issue is this?</p>",
      choices: ["High availability", "VM sprawl", "Measured service", "Sandbox escape"],
      answer: 1,
      topic: "Virtualization and Cloud Computing",
      objective: "4.2",
      difficulty: "medium",
      explanation: "<p>VM sprawl occurs when virtual machines are created faster than they are tracked, secured, patched, or retired. It leads to wasted resources and management risk.</p><p>High availability is a resilience design, measured service is cloud usage tracking, and sandbox escape is a security vulnerability where isolation is bypassed.</p>"
    },
    {
      n: 45,
      prompt: "<p>A building-to-building network link must span 300 meters between switches with immunity to electromagnetic interference. Which media is BEST?</p>",
      choices: ["Multimode fiber", "Cat 5e UTP", "RG-6 coax", "Bluetooth"],
      answer: 0,
      topic: "Networking",
      objective: "2.2",
      difficulty: "medium",
      explanation: "<p>Fiber optic cabling supports longer distances than copper Ethernet and is immune to electromagnetic interference. Multimode fiber is commonly used for building or campus links of this distance.</p><p>Cat 5e UTP Ethernet is limited to 100 meters per segment, RG-6 coax is used for cable broadband or video, and Bluetooth is short-range personal-area wireless.</p>"
    },    {
      n: 46,
      prompt: "<p>Which printer type uses heat-sensitive paper and is common in receipt printers?</p>",
      choices: ["Laser", "Impact", "Thermal", "3-D"],
      answer: 2,
      topic: "Hardware",
      objective: "3.5",
      difficulty: "easy",
      explanation: "<p>Thermal printers use heat to darken special thermal paper or transfer pigment from a ribbon, and direct thermal models are common in receipt printing. They are quiet and have few moving consumables.</p><p>Laser printers use toner and a fuser, impact printers strike a ribbon, and 3-D printers build physical objects from filament or resin.</p>"
    },
    {
      n: 47,
      prompt: "<p>A PC fails POST with three beeps after a memory upgrade. Removing the new DIMM allows the PC to boot. Which action is BEST?</p>",
      choices: ["Replace the CPU cooler", "Verify the DIMM type, speed, and seating against the motherboard compatibility list", "Reinstall the operating system", "Change the monitor refresh rate"],
      answer: 1,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.2",
      difficulty: "hard",
      explanation: "<p>POST beep codes after a RAM upgrade and successful boot without the new module point to memory compatibility, seating, or a bad DIMM. Checking type, speed, capacity support, slot placement, and reseating is the best next action.</p><p>The CPU cooler would cause thermal issues, reinstalling the OS cannot fix POST failures, and monitor refresh rate is irrelevant before the system completes POST.</p>"
    },
    {
      n: 48,
      prompt: "<p>A user cannot connect to a wired network. The link light is off on the PC. A known-good cable and known-good switch port produce the same result, but a USB Ethernet adapter works. Which component is MOST likely bad?</p>",
      choices: ["DHCP server", "Patch panel label", "Default gateway", "Integrated NIC"],
      answer: 3,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.7",
      difficulty: "hard",
      explanation: "<p>With a known-good cable and switch port still showing no link, but a USB Ethernet adapter working, the integrated NIC is the likely failed component. The evidence isolates the problem to the built-in network hardware.</p><p>DHCP would not prevent a physical link light, a patch panel label may be confusing but was bypassed by known-good testing, and the default gateway affects routing after link is established.</p>"
    },
    {
      n: 49,
      prompt: "<p>Which DNS record type maps a hostname such as www.example.com to an IPv4 address?</p>",
      choices: ["MX", "AAAA", "A", "TXT"],
      answer: 2,
      topic: "Networking",
      objective: "2.4",
      difficulty: "medium",
      explanation: "<p>An A record maps a DNS name to an IPv4 address. It is the standard forward lookup record for IPv4 hosts.</p><p>MX records identify mail exchangers, AAAA records map names to IPv6 addresses, and TXT records store text data such as SPF or verification strings.</p>"
    },
    {
      n: 50,
      prompt: "<p>A technician is comparing HDMI and DisplayPort for a new monitor. Which statement is accurate for DisplayPort in a PC environment?</p>",
      choices: ["DisplayPort commonly supports daisy-chaining monitors using MST when supported", "DisplayPort is analog only", "DisplayPort uses RJ45 connectors", "DisplayPort cannot carry audio"],
      answer: 0,
      topic: "Hardware",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>DisplayPort can support Multi-Stream Transport, allowing compatible monitors to be daisy-chained from one output. This is a common PC-focused feature when the GPU, cables, and displays support it.</p><p>DisplayPort is digital rather than analog, it does not use RJ45 connectors, and it can carry audio as well as video.</p>"
    },
    {
      n: 51,
      prompt: "<p>A laser printer jams only when printing duplex jobs. Single-sided jobs complete successfully from all trays. Which assembly should be inspected FIRST?</p>",
      choices: ["Fuser heat lamp", "Toner cartridge chip", "Wireless print server", "Duplexer path and rollers"],
      answer: 3,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.6",
      difficulty: "hard",
      explanation: "<p>Because jams occur only during two-sided printing, the duplex path and its rollers are the most likely cause. Single-sided success narrows the fault away from the general paper feed path.</p><p>A fuser heat lamp would affect all printed pages or toner adhesion, a toner chip affects cartridge recognition, and a wireless print server affects job delivery rather than duplex-only jams.</p>"
    },
    {
      n: 52,
      prompt: "<p>A technician replaces a cracked smartphone screen assembly. After reassembly, the display image is normal but touch input does not work. Which connection should be checked FIRST?</p>",
      choices: ["Cellular antenna coax", "Digitizer ribbon cable", "Vibration motor leads", "Speaker mesh adhesive"],
      answer: 1,
      topic: "Mobile Devices",
      objective: "1.2",
      difficulty: "medium",
      explanation: "<p>If the image is normal but touch does not respond, the digitizer circuit is the likely issue. A loose or damaged digitizer ribbon cable after screen replacement is a common cause.</p><p>The cellular antenna affects signal, the vibration motor affects haptics, and speaker mesh adhesive affects audio or dust resistance rather than touch input.</p>"
    },
    {
      n: 53,
      prompt: "<p>A school wants students to access the same nonpersistent desktop image from lab PCs, and any changes should disappear when they sign out. Which solution BEST fits?</p>",
      choices: ["VDI with nonpersistent desktops", "RAID 1 on each lab PC", "SOHO port forwarding", "NFC pairing"],
      answer: 0,
      topic: "Virtualization and Cloud Computing",
      objective: "4.2",
      difficulty: "medium",
      explanation: "<p>Nonpersistent VDI provides virtual desktops that reset to a known state after logoff. This is ideal for labs where students need a consistent environment without keeping local changes.</p><p>RAID 1 mirrors local disks, SOHO port forwarding exposes services through a router, and NFC pairing is short-range device communication.</p>"
    },
    {
      n: 54,
      prompt: "<p>Which wireless standard is commonly known as Wi-Fi 5?</p>",
      choices: ["802.11g", "802.11n", "802.11ac", "802.11b"],
      answer: 2,
      topic: "Networking",
      objective: "2.3",
      difficulty: "easy",
      explanation: "<p>802.11ac is marketed as Wi-Fi 5 and operates in the 5 GHz band with higher throughput than earlier common Wi-Fi generations. It predates Wi-Fi 6, which is 802.11ax.</p><p>802.11g and 802.11b are older 2.4 GHz standards, and 802.11n is Wi-Fi 4.</p>"
    },
    {
      n: 55,
      prompt: "<p>A user needs a removable drive interface for enterprise NVMe SSDs in a server, using a cabled 2.5-inch form factor rather than an M.2 card. Which interface is MOST appropriate?</p>",
      choices: ["mSATA", "U.2", "IDE", "DB9 serial"],
      answer: 1,
      topic: "Hardware",
      objective: "3.3",
      difficulty: "medium",
      explanation: "<p>U.2 is used for 2.5-inch enterprise SSDs and can carry PCIe/NVMe through a cabled connector, making it suitable for hot-swap server storage designs. It is distinct from small M.2 cards.</p><p>mSATA is an older small SATA form factor, IDE is obsolete parallel ATA storage, and DB9 serial is not a storage drive interface.</p>"
    },
    {
      n: 56,
      prompt: "<p>A workstation boots slowly and makes rhythmic clicking sounds. Applications freeze when opening large files. Which device should the technician suspect FIRST?</p>",
      choices: ["LCD inverter", "CPU fan", "Ink cartridge", "Mechanical hard drive"],
      answer: 3,
      topic: "Hardware and Network Troubleshooting",
      objective: "5.3",
      difficulty: "hard",
      explanation: "<p>Rhythmic clicking plus freezes during disk access are classic mechanical HDD failure symptoms, often caused by head or actuator problems. The technician should prioritize data backup and drive diagnostics or replacement.</p><p>An LCD inverter affects backlight brightness, a CPU fan causes thermal symptoms, and an ink cartridge affects print quality rather than system boot and file access.</p>"
    },
    {
      n: 57,
      prompt: "<p>A CPU supports Intel VT-x or AMD-V. What feature does this provide?</p>",
      choices: ["Hardware-assisted virtualization", "Automatic ECC for all RAM", "Integrated PoE output", "SATA hot-swap detection"],
      answer: 0,
      topic: "Hardware",
      objective: "3.4",
      difficulty: "hard",
      explanation: "<p>Intel VT-x and AMD-V are CPU virtualization extensions that help hypervisors run guest operating systems efficiently and securely. They are often required or strongly recommended for modern virtualization.</p><p>They do not make all RAM ECC, they do not provide Power over Ethernet, and they do not control SATA hot-swap behavior.</p>"
    },
    {
      n: 58,
      prompt: "<p>A rural office cannot obtain cable, DSL, or fiber service. It has clear line of sight to an ISP tower several miles away and needs lower latency than satellite. Which Internet service type is BEST?</p>",
      choices: ["Dial-up", "Cellular hotspot only", "Fixed wireless", "ISDN PRI"],
      answer: 2,
      topic: "Networking",
      objective: "2.7",
      difficulty: "medium",
      explanation: "<p>Fixed wireless Internet uses directional antennas between the customer site and a provider tower, often serving rural areas with better latency than geostationary satellite when line of sight is available.</p><p>Dial-up is extremely slow, a cellular hotspot may not provide stable site service and was not the tower line-of-sight design described, and ISDN PRI is legacy telecom service.</p>"
    },
    {
      n: 59,
      prompt: "<p>Which connector is most commonly used for wired Ethernet on a desktop PC?</p>",
      choices: ["RJ11", "RJ45", "LC", "F-type"],
      answer: 1,
      topic: "Hardware",
      objective: "3.1",
      difficulty: "easy",
      explanation: "<p>RJ45 is the common modular connector used for twisted-pair Ethernet connections on desktop PCs, switches, and patch panels. It has eight positions and is associated with Cat cabling.</p><p>RJ11 is used for telephone lines, LC is a fiber connector, and F-type is used for coaxial cable.</p>"
    },
    {
      n: 60,
      prompt: "<p>A network appliance must examine traffic and block malicious packets inline before they reach servers. Which appliance function is BEST described?</p>",
      choices: ["Network tap", "Proxy cache", "Load balancer", "Intrusion prevention system"],
      answer: 3,
      topic: "Networking",
      objective: "2.2",
      difficulty: "hard",
      explanation: "<p>An intrusion prevention system is placed inline or otherwise able to block traffic that matches attack signatures or policy violations. The key clue is that it actively blocks malicious packets before they reach servers.</p><p>A network tap copies traffic for monitoring, a proxy cache intermediates or stores content, and a load balancer distributes client requests across servers rather than primarily blocking attacks.</p>"
    }
  ] } ]
};