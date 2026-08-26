window.AP_DATA = window.AP_DATA || {};
window.AP_DATA.drills = [
  {
    id: "c1-ports",
    core: "Core 1",
    domain: "Networking",
    title: "Ports, Protocols \u0026 What Breaks Without Them",
    blurb: "Fixes port-number recall by tying each protocol to the outage users actually notice.",
    timeMinutes: 10,
    questions: [
      { n: 1, prompt: "Which port must be open for a client to reach a website over an encrypted connection?", choices: ["80", "443", "8080", "22"], answer: 1, topic: "HTTPS", explanation: "<p>HTTPS uses TCP 443. Port 80 is plain HTTP, 8080 is often an alternate web or proxy port, and 22 is SSH.</p>" },
      { n: 2, prompt: "A user can browse websites by IP address but not by name. Which blocked port best matches the symptom?", choices: ["TCP 389", "UDP 161", "TCP 25", "UDP/TCP 53"], answer: 3, topic: "DNS", explanation: "<p>DNS name lookups use port 53, usually UDP with TCP for larger replies and zone transfers. LDAP 389, SNMP 161, and SMTP 25 do not translate names to addresses.</p>" },
      { n: 3, prompt: "Which protocol uses ports 20 and 21 for classic file transfers?", choices: ["FTP", "SFTP", "SMB", "TFTP"], answer: 0, topic: "FTP", explanation: "<p>FTP uses TCP 21 for control and TCP 20 for active-mode data. SFTP rides over SSH on 22, SMB uses 445, and TFTP uses UDP 69.</p>" },
      { n: 4, prompt: "Remote Desktop to a Windows PC fails through a firewall. Which port should you check first?", choices: ["TCP 445", "TCP 389", "TCP 3389", "TCP 143"], answer: 2, topic: "RDP", explanation: "<p>RDP listens on TCP 3389 by default. SMB 445 is file sharing, LDAP 389 is directory access, and IMAP 143 is mail retrieval.</p>" },
      { n: 5, prompt: "A mail server can receive mail from clients but cannot relay outbound mail to other mail servers. Which port is most likely blocked?", choices: ["TCP 110", "TCP 25", "TCP 143", "TCP 389"], answer: 1, topic: "SMTP", explanation: "<p>SMTP server-to-server mail transfer uses TCP 25. POP3 110 and IMAP 143 retrieve mail, while LDAP 389 is directory lookup.</p>" },
      { n: 6, prompt: "Which port pair is used by DHCP clients and servers during address assignment?", choices: ["TCP 20 and 21", "UDP 161 and 162", "TCP 137 and 139", "UDP 67 and 68"], answer: 3, topic: "DHCP", explanation: "<p>DHCP uses UDP 67 on the server side and UDP 68 on the client side. FTP, SNMP, and NetBIOS use the other port families.</p>" },
      { n: 7, prompt: "Which protocol uses TCP 445 for modern Windows file and printer sharing?", choices: ["SMB/CIFS", "NetBIOS", "LDAP", "SNMP"], answer: 0, topic: "SMB", explanation: "<p>SMB/CIFS uses TCP 445 for direct hosted file sharing. NetBIOS uses 137-139, LDAP uses 389, and SNMP uses 161/162.</p>" },
      { n: 8, prompt: "A monitoring system can poll devices but receives no trap alerts from them. Which port is usually involved with traps?", choices: ["TCP 23", "TCP 110", "UDP 162", "TCP 143"], answer: 2, topic: "SNMP traps", explanation: "<p>SNMP polling commonly uses UDP 161, while SNMP traps are sent to UDP 162. Telnet 23 and mail ports 110 and 143 are unrelated.</p>" }
    ]
  },
  {
    id: "c1-cabling",
    core: "Core 1",
    domain: "Networking",
    title: "Cables, Connectors \u0026 Distance Limits",
    blurb: "Fixes cabling mix-ups by matching media, connectors, limits, and tools to field tasks.",
    timeMinutes: 10,
    questions: [
      { n: 1, prompt: "Which twisted-pair cable rating supports 10 Gbps Ethernet to 100 meters under normal conditions?", choices: ["Cat 5e", "Cat 6a", "Cat 3", "Cat 6 at any install length"], answer: 1, topic: "Ethernet categories", explanation: "<p>Cat 6a is rated for 10GBASE-T to 100 meters. Cat 6 can support 10 Gbps only at shorter distances, Cat 5e is commonly 1 Gbps, and Cat 3 is voice or legacy data.</p>" },
      { n: 2, prompt: "A cable will run through an air-handling ceiling space. Which jacket type is normally required?", choices: ["Riser", "PVC patch", "Outdoor direct burial", "Plenum"], answer: 3, topic: "Plenum cabling", explanation: "<p>Plenum-rated cable is used in air-return spaces because it produces less toxic smoke. Riser cable is for vertical runs between floors, not air plenums.</p>" },
      { n: 3, prompt: "Which connector is normally used on a home coaxial cable for cable internet or TV service?", choices: ["F-type", "RJ45", "LC", "BNC"], answer: 0, topic: "Coax connectors", explanation: "<p>F-type connectors are common on coax for cable TV and cable modems. RJ45 is twisted pair, LC is fiber, and BNC is more common in older video or test environments.</p>" },
      { n: 4, prompt: "Which fiber type is best for very long building-to-building links?", choices: ["Multimode OM3", "Twinax", "Single-mode fiber", "UTP Cat 7"], answer: 2, topic: "Fiber types", explanation: "<p>Single-mode fiber uses a narrow light path and supports longer distances than multimode. Twinax and copper twisted pair are short-range choices.</p>" },
      { n: 5, prompt: "Which connector is smaller than SC and commonly used for high-density fiber patch panels?", choices: ["ST", "LC", "RJ11", "Molex"], answer: 1, topic: "Fiber connectors", explanation: "<p>LC is a small-form fiber connector often used where port density matters. SC is larger, ST uses a twist lock, and RJ11 is for telephone cabling.</p>" },
      { n: 6, prompt: "Two older switches do not support auto-MDI-X. Which cable pattern is used to connect like devices directly?", choices: ["Straight-through 568B to 568B", "Rollover console cable", "Coax with F-type ends", "Crossover using 568A on one end and 568B on the other"], answer: 3, topic: "Crossover cables", explanation: "<p>A crossover cable swaps transmit and receive pairs, commonly by using 568A on one end and 568B on the other. Straight-through patch cables are for unlike devices or modern auto-sensing ports.</p>" },
      { n: 7, prompt: "Which tool terminates twisted-pair wires onto a 110 block or patch panel?", choices: ["Punchdown tool", "Tone generator only", "Cable stripper only", "Multimeter"], answer: 0, topic: "Cabling tools", explanation: "<p>A punchdown tool seats and cuts conductors on IDC terminals. A toner locates cables, a stripper removes jacket, and a multimeter measures electrical values.</p>" },
      { n: 8, prompt: "Which display connector is analog only?", choices: ["HDMI", "DisplayPort", "VGA", "DVI-D"], answer: 2, topic: "Video connectors", explanation: "<p>VGA carries analog video. HDMI and DisplayPort are digital, and DVI-D is the digital-only DVI variant.</p>" }
    ]
  },
  {
    id: "c1-wireless",
    core: "Core 1",
    domain: "Networking",
    title: "Wi-Fi Standards, Channels \u0026 SOHO Setup",
    blurb: "Fixes wireless questions by connecting standards, bands, interference, and router settings to outcomes.",
    timeMinutes: 10,
    questions: [
      { n: 1, prompt: "Which 802.11 standard introduced operation in the 6 GHz band as Wi-Fi 6E?", choices: ["802.11ac", "802.11ax", "802.11n", "802.11g"], answer: 1, topic: "Wi-Fi 6E", explanation: "<p>Wi-Fi 6E is 802.11ax extended into 6 GHz. 802.11ac is 5 GHz Wi-Fi 5, and 802.11n can use 2.4 GHz or 5 GHz.</p>" },
      { n: 2, prompt: "Which 2.4 GHz channel plan minimizes overlap in North America?", choices: ["1, 3, and 5", "2, 7, and 12", "Any three channels with different SSIDs", "1, 6, and 11"], answer: 3, topic: "2.4 GHz channels", explanation: "<p>Channels 1, 6, and 11 are the common non-overlapping 2.4 GHz choices. Nearby channel numbers still overlap because 2.4 GHz channels are wider than their spacing.</p>" },
      { n: 3, prompt: "Which standard is 2.4 GHz only and has a theoretical maximum of 11 Mbps?", choices: ["802.11b", "802.11a", "802.11ac", "802.11ax"], answer: 0, topic: "802.11b", explanation: "<p>802.11b is the older 2.4 GHz, 11 Mbps standard. 802.11a used 5 GHz, while ac and ax are much faster newer standards.</p>" },
      { n: 4, prompt: "A router can transmit to several client devices at the same time instead of taking turns. Which feature is being used?", choices: ["WPS", "RFID", "MU-MIMO", "NAT"], answer: 2, topic: "MU-MIMO", explanation: "<p>MU-MIMO allows multi-user multiple-input multiple-output communication. WPS is enrollment, RFID is short-range identification, and NAT translates addresses.</p>" },
      { n: 5, prompt: "Which household item is a classic source of 2.4 GHz interference?", choices: ["Laser printer fuser", "Microwave oven", "SATA SSD", "Fiber patch cable"], answer: 1, topic: "Wireless interference", explanation: "<p>Microwave ovens can interfere with 2.4 GHz Wi-Fi. Storage devices, fiber, and printer fusers are not typical RF interferers in that band.</p>" },
      { n: 6, prompt: "For a public guest Wi-Fi network in a small office, which setting best limits guest access to internal systems?", choices: ["Disable DHCP", "Reuse the admin password", "Turn on UPnP", "Enable a separate guest network"], answer: 3, topic: "SOHO guest network", explanation: "<p>A guest network isolates visitors from the private LAN when configured correctly. Disabling DHCP breaks clients, and UPnP or shared passwords can increase risk.</p>" },
      { n: 7, prompt: "Which wireless technology is designed for tap-to-pay style communication over only a few centimeters?", choices: ["NFC", "Bluetooth Class 1", "Fixed wireless", "802.11ac"], answer: 0, topic: "NFC range", explanation: "<p>NFC is intended for very short-range contactless exchanges. Bluetooth and Wi-Fi work at longer ranges, while fixed wireless is used for point-to-point links.</p>" },
      { n: 8, prompt: "Which SOHO router change should be done early to close known security bugs?", choices: ["Lower the DHCP lease time", "Hide every SSID", "Update router firmware", "Use channel 3"], answer: 2, topic: "Router firmware", explanation: "<p>Firmware updates patch vulnerabilities and stability issues. Hiding an SSID and odd channel choices are not substitutes for patching.</p>" }
    ]
  },
  {
    id: "c1-ipaddressing",
    core: "Core 1",
    domain: "Networking",
    title: "IP Addressing, DHCP, DNS \u0026 APIPA",
    blurb: "Fixes address-reading mistakes by making private ranges, leases, masks, and DNS records diagnostic clues.",
    timeMinutes: 10,
    questions: [
      { n: 1, prompt: "Which address range is private and belongs to RFC 1918 space?", choices: ["169.254.10.5", "172.16.4.10", "8.8.8.8", "127.0.0.1"], answer: 1, topic: "Private IPv4 ranges", explanation: "<p>172.16.0.0 through 172.31.255.255 is private. 169.254.x.x is APIPA, 8.8.8.8 is public, and 127.0.0.1 is loopback.</p>" },
      { n: 2, prompt: "A Windows client has IP address 169.254.33.9 with no default gateway. What does that prove first?", choices: ["DNS is using an MX record", "The subnet mask is /8", "The loopback adapter failed", "The client did not receive a DHCP lease"], answer: 3, topic: "APIPA", explanation: "<p>APIPA addresses in 169.254.0.0/16 appear when DHCP fails. It does not prove DNS, loopback, or the intended subnet mask is correct.</p>" },
      { n: 3, prompt: "Which DNS record maps a host name directly to an IPv4 address?", choices: ["A", "AAAA", "MX", "CNAME"], answer: 0, topic: "DNS A record", explanation: "<p>An A record maps a name to an IPv4 address. AAAA maps to IPv6, MX names mail exchangers, and CNAME creates an alias.</p>" },
      { n: 4, prompt: "Which subnet mask matches /24 CIDR notation?", choices: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.252"], answer: 2, topic: "CIDR notation", explanation: "<p>/24 means 24 network bits, which is 255.255.255.0. The other masks represent /8, /16, and /30.</p>" },
      { n: 5, prompt: "Which value tells a host where to send traffic destined for remote networks?", choices: ["DNS suffix", "Default gateway", "MAC address", "DHCP lease time"], answer: 1, topic: "Default gateway", explanation: "<p>The default gateway is the router used for off-subnet traffic. DNS suffixes help name resolution, MAC addresses identify interfaces, and lease time controls renewal.</p>" },
      { n: 6, prompt: "Which DNS record family is used with SPF, DKIM, and DMARC policy data?", choices: ["A", "PTR", "SRV", "TXT"], answer: 3, topic: "DNS TXT records", explanation: "<p>SPF, DKIM, and DMARC are published in TXT records. A records are addresses, PTR records are reverse lookups, and SRV records locate services.</p>" },
      { n: 7, prompt: "Which IPv6 address prefix indicates a link-local address?", choices: ["fe80::/10", "2001:db8::/32", "::1/128", "ff00::/8"], answer: 0, topic: "IPv6 link-local", explanation: "<p>IPv6 link-local addresses use fe80::/10 and work only on the local link. ::1 is loopback, ff00::/8 is multicast, and 2001:db8::/32 is documentation space.</p>" },
      { n: 8, prompt: "A printer must always receive the same DHCP-assigned IP address. What should be configured?", choices: ["Shorter lease", "CNAME", "DHCP reservation", "Public address"], answer: 2, topic: "DHCP reservation", explanation: "<p>A DHCP reservation ties a device MAC address to a specific lease. A shorter lease makes addresses change sooner, and DNS records do not control DHCP assignment.</p>" }
    ]
  },
  {
    id: "c1-memory-storage",
    core: "Core 1",
    domain: "Hardware",
    title: "RAM, Storage Interfaces \u0026 RAID",
    blurb: "Fixes memory and storage confusion by separating form factor, interface, performance, and fault tolerance.",
    timeMinutes: 10,
    questions: [
      { n: 1, prompt: "Which desktop memory generation uses 288 pins and is newer than DDR4?", choices: ["DDR3 DIMM", "DDR5 DIMM", "DDR2 DIMM", "DDR3 SODIMM"], answer: 1, topic: "DDR generations", explanation: "<p>Desktop DDR5 DIMMs use 288 pins, as DDR4 also does, but the notch and signaling differ. DDR3 desktop DIMMs use 240 pins, and SODIMMs are laptop modules.</p>" },
      { n: 2, prompt: "Which memory form factor is most commonly installed in laptops?", choices: ["Full-size DIMM", "PCIe x16 riser", "U.2 module", "SODIMM"], answer: 3, topic: "SODIMM", explanation: "<p>SODIMMs are smaller memory modules used in many laptops and compact systems. Full-size DIMMs are common in desktops and servers.</p>" },
      { n: 3, prompt: "Which memory feature can detect and correct many single-bit errors?", choices: ["ECC", "Dual channel", "XMP", "Virtual RAM"], answer: 0, topic: "ECC memory", explanation: "<p>ECC memory adds error correction for reliability. Dual channel affects bandwidth, XMP is a performance profile, and virtual RAM is disk-backed paging.</p>" },
      { n: 4, prompt: "Which M.2 storage interface normally provides the highest performance by using PCIe lanes?", choices: ["M.2 SATA", "mSATA", "M.2 NVMe", "2.5-inch SATA"], answer: 2, topic: "NVMe", explanation: "<p>M.2 NVMe uses PCIe and the NVMe protocol for high throughput and low latency. M.2 SATA and 2.5-inch SATA are limited by SATA performance.</p>" },
      { n: 5, prompt: "Which RAID level stripes data with no redundancy and loses the array if one disk fails?", choices: ["RAID 1", "RAID 0", "RAID 5", "RAID 10"], answer: 1, topic: "RAID 0", explanation: "<p>RAID 0 improves performance and uses all capacity, but it has no fault tolerance. RAID 1 mirrors, RAID 5 uses parity, and RAID 10 mirrors striped pairs.</p>" },
      { n: 6, prompt: "Which RAID level needs at least four drives and can survive one failed drive in each mirrored pair if the failures are in different pairs?", choices: ["RAID 5", "RAID 6", "RAID 0", "RAID 10"], answer: 3, topic: "RAID 10", explanation: "<p>RAID 10 combines striping and mirroring and requires at least four disks. The trap is thinking it always survives any two failures; it depends on which mirrored pairs fail.</p>" },
      { n: 7, prompt: "Which drive size is typical for laptop hard drives?", choices: ["2.5-inch", "3.5-inch", "5.25-inch", "U.2 only"], answer: 0, topic: "Drive form factors", explanation: "<p>2.5-inch drives are common in laptops. 3.5-inch drives are desktop-sized, and U.2 describes an enterprise SSD connection rather than a laptop HDD size.</p>" },
      { n: 8, prompt: "Which RAID level uses dual parity and can tolerate two disk failures?", choices: ["RAID 0", "RAID 1", "RAID 6", "RAID 5"], answer: 2, topic: "RAID 6", explanation: "<p>RAID 6 uses dual distributed parity and requires at least four disks. RAID 5 tolerates one failed disk, RAID 1 mirrors, and RAID 0 has no redundancy.</p>" }
    ]
  },
  {
    id: "c1-power-boards",
    core: "Core 1",
    domain: "Hardware",
    title: "Power Supplies, Motherboards \u0026 CPUs",
    blurb: "Fixes hardware build errors by tying power leads, board sizes, slots, and cooling parts to compatibility.",
    timeMinutes: 10,
    questions: [
      { n: 1, prompt: "Which PSU connector powers the main motherboard socket on a modern ATX board?", choices: ["8-pin EPS", "24-pin ATX", "6+2-pin PCIe", "SATA power"], answer: 1, topic: "ATX power", explanation: "<p>The 24-pin ATX connector is the main motherboard power connection. EPS powers the CPU area, PCIe powers graphics cards, and SATA power feeds drives.</p>" },
      { n: 2, prompt: "A graphics card needs an 8-pin auxiliary power input. Which PSU lead is designed for that load?", choices: ["SATA power", "4-pin fan header", "24-pin ATX", "6+2-pin PCIe"], answer: 3, topic: "PCIe power", explanation: "<p>A 6+2-pin PCIe connector can form an 8-pin GPU power lead. SATA power and fan headers are not built for graphics-card auxiliary power.</p>" },
      { n: 3, prompt: "Which motherboard form factor is the full-size desktop standard larger than microATX and Mini-ITX?", choices: ["ATX", "Mini-ITX", "Nano-ITX", "M.2"], answer: 0, topic: "Motherboard form factors", explanation: "<p>ATX is the common full-size desktop board. microATX and Mini-ITX are smaller, and M.2 is an expansion/storage form factor.</p>" },
      { n: 4, prompt: "Which PCIe slot size is commonly used for a high-performance graphics card?", choices: ["x1", "x4", "x16", "M.2 E-key"], answer: 2, topic: "PCIe lanes", explanation: "<p>Graphics cards normally use a physical x16 PCIe slot. x1 and x4 slots have fewer lanes, and M.2 E-key is usually for Wi-Fi cards.</p>" },
      { n: 5, prompt: "Which material fills microscopic gaps between a CPU heat spreader and heat sink?", choices: ["Thread locker", "Thermal paste", "Solder wick", "Dielectric grease for connectors"], answer: 1, topic: "Thermal interface", explanation: "<p>Thermal paste or pads improve heat transfer between the CPU and cooler. Too much paste can insulate or spill, and the other materials are not CPU thermal interfaces.</p>" },
      { n: 6, prompt: "Which PSU feature lets you attach only the cables needed for the build?", choices: ["Redundant power", "80 PLUS Bronze", "Dual voltage only", "Modular cabling"], answer: 3, topic: "Modular PSU", explanation: "<p>A modular PSU has detachable cables for cleaner cable management. Redundant power uses multiple PSU units, and 80 PLUS is an efficiency rating.</p>" },
      { n: 7, prompt: "Which connector is commonly used to power the CPU voltage-regulator area on a motherboard?", choices: ["8-pin EPS/CPU", "SATA data", "USB-C", "RJ45"], answer: 0, topic: "CPU power", explanation: "<p>The 8-pin EPS/CPU connector powers the processor area. SATA data, USB-C, and RJ45 are not motherboard CPU power connectors.</p>" },
      { n: 8, prompt: "Which power event is a drop in voltage rather than a complete loss of power?", choices: ["Blackout", "ESD", "Brownout", "Surge"], answer: 2, topic: "Power conditions", explanation: "<p>A brownout is reduced voltage. A blackout is complete loss, a surge is excess voltage, and ESD is static discharge.</p>" }
    ]
  },
  {
    id: "c1-printers",
    core: "Core 1",
    domain: "Hardware",
    title: "Printers: Process, Consumables \u0026 Maintenance",
    blurb: "Fixes printer questions by linking imaging steps, parts, and output defects to the right fix.",
    timeMinutes: 10,
    questions: [
      { n: 1, prompt: "Which step comes immediately after charging in the laser printing process?", choices: ["Developing", "Exposing", "Fusing", "Cleaning"], answer: 1, topic: "Laser print process", explanation: "<p>The order is processing, charging, exposing, developing, transferring, fusing, and cleaning. The trap is placing developing before the laser writes the image.</p>" },
      { n: 2, prompt: "Pages from a laser printer smear when touched and toner is not bonded to the paper. Which part is the best suspect?", choices: ["Transfer roller", "Pickup roller", "Imaging drum", "Fuser"], answer: 3, topic: "Fuser failure", explanation: "<p>The fuser uses heat and pressure to bond toner. A transfer roller moves toner to paper, and the drum carries the image before transfer.</p>" },
      { n: 3, prompt: "Which printer type uses a ribbon and tractor feed paper most often?", choices: ["Impact", "Inkjet", "Thermal", "Laser"], answer: 0, topic: "Impact printers", explanation: "<p>Impact printers strike through an inked ribbon and often use tractor feed paper. Inkjet, thermal, and laser printers do not use tractor feed as their defining mechanism.</p>" },
      { n: 4, prompt: "Which consumable is specific to many direct thermal printers?", choices: ["Toner cartridge", "Ink absorber", "Heat-sensitive paper", "Photoconductor belt"], answer: 2, topic: "Thermal printers", explanation: "<p>Direct thermal printers use heat-sensitive paper and a heating element. Toner and photoconductors belong to laser printing, while ink absorbers are associated with inkjets.</p>" },
      { n: 5, prompt: "Which feature prints on both sides of a sheet automatically?", choices: ["Collating", "Duplexing", "Spooling", "ADF scanning"], answer: 1, topic: "Duplexing", explanation: "<p>Duplexing is two-sided printing. Collating orders pages, spooling queues jobs, and an ADF feeds originals for scanning or copying.</p>" },
      { n: 6, prompt: "A scanner pulls multiple pages through for copying without lifting the lid each time. Which component is being used?", choices: ["Flatbed glass only", "Transfer belt", "Duplexer", "ADF"], answer: 3, topic: "ADF", explanation: "<p>An automatic document feeder moves pages through the scanner. A flatbed scans one placed item at a time, and printer transfer parts do not feed originals.</p>" },
      { n: 7, prompt: "Which service stores print jobs temporarily before sending them to the printer?", choices: ["Print spooler", "DHCP client", "Indexing service", "SNMP trap receiver"], answer: 0, topic: "Print spooling", explanation: "<p>The print spooler queues jobs so applications can continue working. DHCP, indexing, and SNMP do not manage the local print queue.</p>" },
      { n: 8, prompt: "Which 3-D printer material is common in filament-based printers?", choices: ["Toner", "Thermal receipt roll", "PLA", "Cyan ink"], answer: 2, topic: "3-D printer consumables", explanation: "<p>PLA is a common filament for fused-filament 3-D printers. Resin is used in different 3-D printer types, while toner, receipt paper, and ink belong to 2-D printers.</p>" }
    ]
  },
  {
    id: "c1-mobile",
    core: "Core 1",
    domain: "Mobile Devices",
    title: "Mobile Hardware, Connections \u0026 Sync",
    blurb: "Fixes mobile-device misses by drilling replaceable parts, pairing order, ports, enrollment, and sync settings.",
    timeMinutes: 10,
    questions: [
      { n: 1, prompt: "A laptop screen is very dim but an external monitor works. Which older display component is a likely suspect on a CCFL-backlit panel?", choices: ["Digitizer", "Inverter", "Keyboard backlight", "Webcam"], answer: 1, topic: "Laptop display inverter", explanation: "<p>An inverter powers the backlight on older CCFL laptop displays. A digitizer senses touch, and the webcam or keyboard light would not dim the LCD image.</p>" },
      { n: 2, prompt: "Which step belongs first when pairing a Bluetooth headset to a phone?", choices: ["Enter the PIN before discovery", "Install an MDM profile", "Disable all radios", "Enable Bluetooth and put the headset in pairing mode"], answer: 3, topic: "Bluetooth pairing", explanation: "<p>Pairing starts by enabling Bluetooth and making the device discoverable or in pairing mode. PIN confirmation comes after discovery, not before.</p>" },
      { n: 3, prompt: "Which laptop component is most likely connected to antenna leads routed around the display bezel?", choices: ["Wireless card", "SATA drive", "Touchpad", "Speaker"], answer: 0, topic: "Wi-Fi antenna routing", explanation: "<p>Wi-Fi antenna leads commonly run from the wireless card into the display area for better reception. Drives, touchpads, and speakers do not use RF antenna leads.</p>" },
      { n: 4, prompt: "Which port is commonly used for secure IMAP mail retrieval?", choices: ["TCP 110", "TCP 143", "TCP 993", "TCP 25"], answer: 2, topic: "Mobile email ports", explanation: "<p>IMAPS uses TCP 993. POP3 uses 110 or 995 when secured, IMAP without TLS often uses 143, and SMTP uses 25, 465, or 587 depending on role and security.</p>" },
      { n: 5, prompt: "Which mobile connection lets a laptop use a phone's cellular data through Wi-Fi or USB?", choices: ["NFC tap", "Tethering or hotspot", "MDM wipe", "Screen mirroring only"], answer: 1, topic: "Tethering", explanation: "<p>Tethering and hotspot features share a phone's cellular data connection. NFC is short-range exchange, and MDM is management, not data sharing.</p>" },
      { n: 6, prompt: "Which management model focuses on controlling corporate apps and their data rather than the whole device?", choices: ["Full disk imaging", "BIOS flashing", "RAID enrollment", "MAM"], answer: 3, topic: "MAM", explanation: "<p>Mobile application management controls apps and app data. MDM manages the device more broadly, while imaging, BIOS flashing, and RAID are not mobile app control models.</p>" },
      { n: 7, prompt: "Which connector replaced Lightning on many newer phones and tablets and is reversible?", choices: ["USB-C", "RJ11", "VGA", "eSATA"], answer: 0, topic: "Mobile connectors", explanation: "<p>USB-C is reversible and common on newer mobile devices. RJ11 is phone wiring, VGA is video, and eSATA is external storage.</p>" },
      { n: 8, prompt: "Which device is mainly a dock with ports that extends connectivity but may not add charging or proprietary expansion features?", choices: ["Digitizer", "Smart card", "Port replicator", "WWAN card"], answer: 2, topic: "Port replicator", explanation: "<p>A port replicator expands available connectors. A docking station often provides a more complete desktop experience, while digitizers, smart cards, and WWAN cards serve different roles.</p>" }
    ]
  },
  {
    id: "c1-cloud",
    core: "Core 1",
    domain: "Virtualization and Cloud Computing",
    title: "Hypervisors, Cloud Models \u0026 VDI",
    blurb: "Fixes cloud model mistakes by matching services, deployment types, and virtualization traits to examples.",
    timeMinutes: 10,
    questions: [
      { n: 1, prompt: "Which hypervisor type installs directly on server hardware without a host operating system?", choices: ["Type 2", "Type 1", "Application virtualization", "VDI client"], answer: 1, topic: "Hypervisor types", explanation: "<p>A Type 1 hypervisor runs on bare metal. A Type 2 hypervisor runs as an application on a host OS, which is the common trap.</p>" },
      { n: 2, prompt: "A developer rents virtual machines, storage, and networks but manages the operating systems. Which cloud service model is this?", choices: ["SaaS", "PaaS", "VDI", "IaaS"], answer: 3, topic: "IaaS", explanation: "<p>IaaS provides infrastructure such as VMs and storage. PaaS hides more of the OS layer, and SaaS is a finished application.</p>" },
      { n: 3, prompt: "Which cloud model provides a complete application such as webmail with no customer OS management?", choices: ["SaaS", "IaaS", "Bare-metal hypervisor", "Community cloud"], answer: 0, topic: "SaaS", explanation: "<p>SaaS delivers a ready-to-use application. IaaS still requires OS and application administration, while community cloud describes who shares the deployment.</p>" },
      { n: 4, prompt: "Which deployment model combines company-owned resources with public cloud resources?", choices: ["Private only", "Community only", "Hybrid", "Metered only"], answer: 2, topic: "Hybrid cloud", explanation: "<p>Hybrid cloud combines private and public resources. Public, private, and community describe other ownership or sharing models, and metered utilization is a characteristic.</p>" },
      { n: 5, prompt: "Which cloud characteristic means resources can scale up quickly and then scale back down?", choices: ["VM sprawl", "Rapid elasticity", "Sandbox escape", "On-premises VDI"], answer: 1, topic: "Rapid elasticity", explanation: "<p>Rapid elasticity is fast expansion and contraction of resources. VM sprawl is uncontrolled growth of VMs, not a benefit by itself.</p>" },
      { n: 6, prompt: "Which issue describes uncontrolled creation of virtual machines that are forgotten or unmanaged?", choices: ["High availability", "Shared resources", "Measured service", "VM sprawl"], answer: 3, topic: "VM sprawl", explanation: "<p>VM sprawl is the buildup of unmanaged or unnecessary VMs. High availability and shared resources are intended design goals, not the unmanaged-growth problem.</p>" },
      { n: 7, prompt: "Which technology presents a user's desktop from a central server or cloud rather than running it fully on the endpoint?", choices: ["VDI", "NFC", "RAID 0", "SNMP"], answer: 0, topic: "VDI", explanation: "<p>Virtual desktop infrastructure hosts desktops centrally and displays them to clients. NFC, RAID, and SNMP do not provide remote desktops.</p>" },
      { n: 8, prompt: "Which practice isolates risky software so it can be tested without harming the production system?", choices: ["Metered billing", "File synchronization", "Sandboxing", "Port forwarding"], answer: 2, topic: "Sandboxing", explanation: "<p>Sandboxing confines code or applications to a controlled environment. File sync copies data, metering tracks usage, and port forwarding exposes services.</p>" }
    ]
  },
  {
    id: "c1-troubleshooting",
    core: "Core 1",
    domain: "Hardware and Network Troubleshooting",
    title: "Symptom \u2192 Cause: The Diagnostic Drill",
    blurb: "Fixes troubleshooting hesitation by tying CompTIA's order and common symptoms to likely causes.",
    timeMinutes: 10,
    questions: [
      { n: 1, prompt: "After identifying a problem in the CompTIA troubleshooting method, what is the next step?", choices: ["Document findings", "Establish a theory of probable cause", "Verify full system functionality", "Implement the solution"], answer: 1, topic: "Troubleshooting order", explanation: "<p>The order starts with identify the problem, then establish a theory. Jumping straight to implementation or documentation skips required diagnostic steps.</p>" },
      { n: 2, prompt: "A desktop has no POST, no fans, and no lights after a move. Which check should come first?", choices: ["Replace the CPU", "Rebuild RAID", "Flash the BIOS", "Verify AC power and PSU connections"], answer: 3, topic: "No POST", explanation: "<p>No fans or lights points first to power delivery. CPU, RAID, and BIOS work should wait until basic power and connections are confirmed.</p>" },
      { n: 3, prompt: "A laptop shuts down under load and the fan is loud. Which cause best fits?", choices: ["Overheating and thermal throttling", "Incorrect DNS server", "Failed CMOS battery only", "Bad printer driver"], answer: 0, topic: "Overheating", explanation: "<p>Load-related shutdown with loud fans strongly suggests heat buildup, blocked vents, bad fan, or poor thermal transfer. DNS and printer drivers do not power off the laptop.</p>" },
      { n: 4, prompt: "A hard drive makes rhythmic clicking and reports SMART warnings. What is the best next action?", choices: ["Defragment the drive repeatedly", "Disable SMART in firmware", "Back up data and replace the drive", "Change the monitor cable"], answer: 2, topic: "Drive failure", explanation: "<p>Clicking plus SMART failure means probable physical drive failure, so protect data and replace it. Defragmenting can worsen a failing disk.</p>" },
      { n: 5, prompt: "Which visual motherboard symptom suggests failing capacitors?", choices: ["Loose RJ45 latch", "Bulging or leaking capacitor tops", "Dust on a case filter", "Dim keyboard letters"], answer: 1, topic: "Capacitor swelling", explanation: "<p>Swollen or leaking capacitors are a board-level failure clue. Dust can cause heat, but it is not the distinctive capacitor symptom.</p>" },
      { n: 6, prompt: "A switch port repeatedly goes up and down, interrupting a connected workstation. What is this symptom called?", choices: ["APIPA", "Ghosting", "Thermal runaway", "Port flapping"], answer: 3, topic: "Port flapping", explanation: "<p>Port flapping is a link repeatedly transitioning up and down. APIPA is self-assigned addressing, and ghosting is a printer output defect.</p>" },
      { n: 7, prompt: "A laser printer repeats a faint copy of the previous page image. Which defect name best matches?", choices: ["Ghosting", "Jitter", "RAID degraded", "Limited connectivity"], answer: 0, topic: "Printer ghosting", explanation: "<p>Ghosting is a repeated faint image, often tied to drum, fuser, or charge problems. Jitter is network delay variation, not a print defect.</p>" },
      { n: 8, prompt: "A tablet battery is swollen and lifting the display. What should the technician do?", choices: ["Press the display flat", "Puncture the battery to release gas", "Stop using it and follow battery safety procedures", "Warm it with a heat gun"], answer: 2, topic: "Distended battery", explanation: "<p>A distended lithium battery is a safety hazard. Do not puncture, compress, heat, or keep using it; follow approved handling and disposal steps.</p>" }
    ]
  },
  {
    id: "c2-windows",
    core: "Core 2",
    domain: "Operating Systems",
    title: "Windows Editions, Tools \u0026 Applets",
    blurb: "Fixes Windows administration questions by mapping editions, filesystems, install choices, and tools to tasks.",
    timeMinutes: 10,
    questions: [
      { n: 1, prompt: "Which Windows edition feature set includes domain join, Group Policy support, BitLocker, and Remote Desktop host for business PCs?", choices: ["Windows Home", "Windows Pro", "Windows SE only", "Windows IoT only"], answer: 1, topic: "Windows editions", explanation: "<p>Windows Pro adds business features such as domain join, Group Policy, BitLocker, and RDP host. Home lacks several of those management features.</p>" },
      { n: 2, prompt: "Which partition style supports disks larger than 2 TB and is associated with UEFI boot?", choices: ["MBR", "FAT32", "Dynamic only", "GPT"], answer: 3, topic: "GPT", explanation: "<p>GPT supports very large disks and is used with UEFI boot. MBR has older limits, including the common 2 TB disk-size barrier.</p>" },
      { n: 3, prompt: "Which filesystem has a single-file size limit of about 4 GB?", choices: ["FAT32", "NTFS", "ReFS", "exFAT"], answer: 0, topic: "FAT32 limit", explanation: "<p>FAT32 is widely compatible but has a 4 GB per-file limit. NTFS and exFAT are better choices for larger files.</p>" },
      { n: 4, prompt: "Which Windows tool is used to view hardware devices, driver status, and disabled adapters?", choices: ["Task Scheduler", "Event Viewer", "Device Manager", "Disk Cleanup"], answer: 2, topic: "Device Manager", explanation: "<p>Device Manager shows devices, drivers, and hardware problem indicators. Event Viewer shows logs, and Task Scheduler manages timed jobs.</p>" },
      { n: 5, prompt: "Which Task Manager tab is best for disabling a program that launches at sign-in?", choices: ["Details", "Startup", "Users", "Services"], answer: 1, topic: "Task Manager Startup", explanation: "<p>The Startup tab controls many sign-in startup apps. Services manages services, Details lists processes, and Users groups activity by logged-in account.</p>" },
      { n: 6, prompt: "Which Windows tool is the primary place to create partitions and assign drive letters?", choices: ["Registry Editor", "Performance Monitor", "Local Users and Groups", "Disk Management"], answer: 3, topic: "Disk Management", explanation: "<p>Disk Management handles partitioning, formatting, and drive letters. The registry, performance counters, and user management do not create volumes.</p>" },
      { n: 7, prompt: "Which installation choice keeps supported applications, data, and settings when moving to a compatible newer Windows version?", choices: ["In-place upgrade", "Clean install", "Disk wipe", "Low-level format"], answer: 0, topic: "In-place upgrade", explanation: "<p>An in-place upgrade preserves compatible apps, files, and settings. A clean install starts fresh and normally requires reinstalling applications.</p>" },
      { n: 8, prompt: "Which tool is used to inspect application, security, and system logs after a crash?", choices: ["MSConfig", "Resource Monitor", "Event Viewer", "winver"], answer: 2, topic: "Event Viewer", explanation: "<p>Event Viewer is the Windows log viewer. MSConfig changes startup settings, Resource Monitor shows live resource use, and winver reports Windows version.</p>" }
    ]
  },
  {
    id: "c2-cli",
    core: "Core 2",
    domain: "Operating Systems",
    title: "Command Line: Windows, macOS \u0026 Linux",
    blurb: "Fixes command-line recall by pairing each command and switch with the job it actually performs.",
    timeMinutes: 10,
    questions: [
      { n: 1, prompt: "Which Windows command displays full adapter details, including DNS servers and DHCP lease information?", choices: ["ping /a", "ipconfig /all", "hostname /v", "netstat -r"], answer: 1, topic: "ipconfig /all", explanation: "<p>ipconfig /all shows detailed IP configuration. ping tests reachability, hostname prints the computer name, and netstat shows connections or routing data.</p>" },
      { n: 2, prompt: "Which Windows command clears the local DNS resolver cache?", choices: ["ipconfig /renew", "nslookup /clear", "net use /delete", "ipconfig /flushdns"], answer: 3, topic: "DNS cache", explanation: "<p>ipconfig /flushdns clears cached name lookups. /renew requests a DHCP lease, and nslookup queries DNS rather than clearing the cache.</p>" },
      { n: 3, prompt: "Which command traces each router hop to a destination on Windows?", choices: ["tracert", "pathping /release", "chkdsk", "gpresult"], answer: 0, topic: "tracert", explanation: "<p>tracert shows the route hop by hop. pathping combines route tracing with loss statistics, but /release is not its function.</p>" },
      { n: 4, prompt: "What does chkdsk /f /r do on a Windows volume?", choices: ["Forces Group Policy and reboots", "Formats the disk immediately", "Fixes filesystem errors and locates bad sectors", "Flushes DNS and renews DHCP"], answer: 2, topic: "chkdsk", explanation: "<p>chkdsk /f fixes logical filesystem errors, and /r locates bad sectors and recovers readable data. It does not format, update policy, or renew networking.</p>" },
      { n: 5, prompt: "Which Windows command is best for robust file copying with restartable mode and mirroring options?", choices: ["xcopy only", "robocopy", "format", "winver"], answer: 1, topic: "robocopy", explanation: "<p>robocopy is designed for robust copying and can mirror directories. xcopy is older and less capable, while format and winver do unrelated jobs.</p>" },
      { n: 6, prompt: "Which Linux or macOS command changes file permissions such as chmod 755 script.sh?", choices: ["chown", "grep", "df", "chmod"], answer: 3, topic: "chmod", explanation: "<p>chmod changes permission bits with numeric or symbolic modes. chown changes owner, grep searches text, and df shows disk free space.</p>" },
      { n: 7, prompt: "Which command searches text for matching lines?", choices: ["grep", "pwd", "mv", "dd"], answer: 0, topic: "grep", explanation: "<p>grep prints lines matching a pattern. pwd prints the current directory, mv moves or renames files, and dd copies data at a low level.</p>" },
      { n: 8, prompt: "Which command shows a real-time process and resource view on many Linux systems?", choices: ["cat", "find", "top", "nano"], answer: 2, topic: "top", explanation: "<p>top displays running processes and resource usage interactively. cat prints files, find locates files, and nano edits text.</p>" }
    ]
  },
  {
    id: "c2-security",
    core: "Core 2",
    domain: "Security",
    title: "Malware, Social Engineering \u0026 Removal Order",
    blurb: "Fixes security classification errors by connecting attack clues, malware behavior, and cleanup order.",
    timeMinutes: 10,
    questions: [
      { n: 1, prompt: "Which malware encrypts user data and demands payment for a key?", choices: ["Spyware", "Ransomware", "Worm", "Rootkit"], answer: 1, topic: "Ransomware", explanation: "<p>Ransomware encrypts or locks data and demands payment. Spyware observes, worms self-propagate, and rootkits hide privileged access.</p>" },
      { n: 2, prompt: "After identifying and researching malware symptoms, what is the next CompTIA malware-removal step?", choices: ["Enable System Restore", "Educate the user", "Document findings", "Quarantine infected systems"], answer: 3, topic: "Malware removal order", explanation: "<p>The seven-step order begins identify and research symptoms, then quarantine infected systems. Education and documentation happen after removal and remediation.</p>" },
      { n: 3, prompt: "Which social-engineering attack targets a high-ranking executive with a tailored message?", choices: ["Whaling", "Tailgating", "Dumpster diving", "Shoulder surfing"], answer: 0, topic: "Whaling", explanation: "<p>Whaling is spear phishing aimed at executives or other high-value people. Tailgating and shoulder surfing require physical proximity.</p>" },
      { n: 4, prompt: "A user connects to a fake Wi-Fi network named like the hotel network. Which attack is this?", choices: ["SQL injection", "Dictionary attack", "Evil twin", "Insider threat"], answer: 2, topic: "Evil twin", explanation: "<p>An evil twin is a rogue access point that imitates a legitimate network. SQL injection targets databases, and dictionary attacks guess passwords.</p>" },
      { n: 5, prompt: "Which attack floods a service with traffic from many sources to make it unavailable?", choices: ["Spoofing", "DDoS", "XSS", "Keylogging"], answer: 1, topic: "DDoS", explanation: "<p>A distributed denial-of-service attack uses many systems to overwhelm a target. Spoofing falsifies identity, XSS injects scripts, and keylogging records keystrokes.</p>" },
      { n: 6, prompt: "Which malware type hides deep in the OS to maintain privileged, stealthy access?", choices: ["Virus", "Cryptominer", "Boot sector virus only", "Rootkit"], answer: 3, topic: "Rootkit", explanation: "<p>A rootkit hides its presence while maintaining privileged access. Cryptominers steal compute resources, and viruses attach to other code.</p>" },
      { n: 7, prompt: "Which attack uses a list of common words or leaked passwords instead of every possible character combination?", choices: ["Dictionary attack", "Zero day", "On-path attack", "Piggybacking"], answer: 0, topic: "Dictionary attack", explanation: "<p>A dictionary attack tries words or known password lists. Brute force tries combinations systematically, and zero day exploits an unknown or unpatched flaw.</p>" },
      { n: 8, prompt: "A browser repeatedly redirects to ad pages and shows fake infection warnings. Which category best fits?", choices: ["Valid certificate warning", "Normal captive portal", "Spyware or adware", "RAID failure"], answer: 2, topic: "Spyware symptoms", explanation: "<p>Redirects and fake alerts commonly point to spyware, adware, or a malicious extension. Storage failure and normal captive portals do not explain persistent fake security warnings.</p>" }
    ]
  },
  {
    id: "c2-access",
    core: "Core 2",
    domain: "Security",
    title: "Permissions, Authentication \u0026 Hardening",
    blurb: "Fixes access-control questions by drilling permission inheritance, factor types, encryption choices, and hardening steps.",
    timeMinutes: 10,
    questions: [
      { n: 1, prompt: "A user has NTFS Modify permission but only share Read permission when accessing over the network. What is the effective access?", choices: ["Full Control", "Read", "Modify", "No access"], answer: 1, topic: "Share and NTFS permissions", explanation: "<p>Across the network, share and NTFS permissions combine to the most restrictive effective access. The share Read permission limits the broader NTFS Modify permission.</p>" },
      { n: 2, prompt: "Which principle says users should receive only the access needed to perform their jobs?", choices: ["Permission creep", "Separation of duties only", "Implicit deny disabled", "Least privilege"], answer: 3, topic: "Least privilege", explanation: "<p>Least privilege limits rights to business need. Permission creep is the opposite problem: access accumulates over time.</p>" },
      { n: 3, prompt: "Which MFA factor category is represented by a fingerprint scan?", choices: ["Something you are", "Something you know", "Somewhere you are", "Something you do not have"], answer: 0, topic: "Authentication factors", explanation: "<p>Biometrics are something you are. Passwords are something you know, and tokens or smart cards are something you have.</p>" },
      { n: 4, prompt: "Which Windows feature encrypts removable USB drives?", choices: ["EFS only", "Kerberos", "BitLocker To Go", "UAC"], answer: 2, topic: "BitLocker To Go", explanation: "<p>BitLocker To Go protects removable drives. EFS encrypts files, Kerberos authenticates in domains, and UAC prompts for elevation.</p>" },
      { n: 5, prompt: "Which Wi-Fi security option is strongest for a modern SOHO router when all clients support it?", choices: ["WEP", "WPA3", "WPA with TKIP", "Open network with hidden SSID"], answer: 1, topic: "WPA3", explanation: "<p>WPA3 is the strongest listed modern Wi-Fi option. WEP and TKIP are outdated, and hiding an SSID does not provide encryption.</p>" },
      { n: 6, prompt: "Which authentication protocol is commonly used for centralized Wi-Fi or VPN authentication and accounting?", choices: ["AES", "TKIP", "NFC", "RADIUS"], answer: 3, topic: "RADIUS", explanation: "<p>RADIUS centralizes authentication, authorization, and accounting for network access. AES and TKIP are encryption methods, not AAA servers.</p>" },
      { n: 7, prompt: "Which physical control uses two interlocking doors to prevent tailgating?", choices: ["Access control vestibule", "Cable lock", "Bollard", "Privacy filter"], answer: 0, topic: "Physical security", explanation: "<p>An access control vestibule, often called a mantrap, uses controlled doors to admit one person at a time. Bollards stop vehicles, and privacy filters protect screens.</p>" },
      { n: 8, prompt: "Which data destruction method is appropriate for securely destroying paper records?", choices: ["Quick format", "Low-level format", "Cross-cut shredding", "Degaussing"], answer: 2, topic: "Data destruction", explanation: "<p>Cross-cut shredding destroys paper records. Formatting applies to storage media, and degaussing applies to magnetic media, not paper.</p>" }
    ]
  },
  {
    id: "c2-swtrouble",
    core: "Core 2",
    domain: "Software Troubleshooting",
    title: "Windows \u0026 Mobile Software Symptoms",
    blurb: "Fixes symptom-to-fix choices by matching OS and mobile failures with the least destructive repair.",
    timeMinutes: 10,
    questions: [
      { n: 1, prompt: "A Windows PC shows repeated blue screens shortly after a new graphics driver. Which fix should be tried before reimaging?", choices: ["Replace the monitor", "Roll back or update the driver", "Delete every user profile", "Disable the firewall"], answer: 1, topic: "BSOD driver fix", explanation: "<p>Recent driver changes are a common BSOD cause, so rollback or update the driver first. Reimaging is more destructive and should not be the first move.</p>" },
      { n: 2, prompt: "A computer displays no OS found after a storage change. Which area should be checked first?", choices: ["Printer queue", "Browser cache", "Screen resolution", "Boot order and drive detection"], answer: 3, topic: "No OS found", explanation: "<p>No OS found points to boot order, missing boot files, or a drive not detected. Printer, browser, and display settings do not locate the operating system.</p>" },
      { n: 3, prompt: "An application fails because the system lacks required RAM and CPU features. Which fix matches the cause?", choices: ["Add resources or verify requirements", "Flush DNS only", "Change wallpaper", "Clear print spooler"], answer: 0, topic: "Application requirements", explanation: "<p>If requirements are not met, add resources or use hardware and OS that meet them. DNS and print fixes do not satisfy application prerequisites.</p>" },
      { n: 4, prompt: "Which command is a common first repair for corrupted Windows system files?", choices: ["winver", "net use", "sfc /scannow", "shutdown /s"], answer: 2, topic: "System file repair", explanation: "<p>sfc /scannow checks and repairs protected system files. DISM may be used with it, but winver, net use, and shutdown do not repair corruption.</p>" },
      { n: 5, prompt: "A domain user's sign-in takes a very long time and creates a temporary desktop. What is a likely fix?", choices: ["Replace the CMOS battery", "Rebuild or recreate the user profile", "Disable DHCP", "Clean the printer rollers"], answer: 1, topic: "Corrupted profile", explanation: "<p>Temporary profiles and slow profile loading suggest profile corruption or profile path problems. Printer maintenance and DHCP changes do not repair the profile.</p>" },
      { n: 6, prompt: "A mobile app crashes immediately after an update. Which least destructive step should be tried early?", choices: ["Factory reset the phone first", "Replace the battery", "Enroll in RAID", "Update, reinstall, or clear the app cache as appropriate"], answer: 3, topic: "Mobile app crash", explanation: "<p>For a single failing app, update, reinstall, or clear app data/cache before drastic actions. A factory reset is a later option after backups and simpler fixes.</p>" },
      { n: 7, prompt: "A phone screen no longer rotates when turned sideways. Which setting or sensor area should be checked first?", choices: ["Autorotate lock and motion sensors", "SMTP relay", "NTFS permissions", "Print spooler"], answer: 0, topic: "No autorotate", explanation: "<p>No autorotate is usually caused by rotation lock, app behavior, or motion sensor issues. Mail relay, NTFS, and print services are unrelated.</p>" },
      { n: 8, prompt: "A phone shows certificate warnings on many secure sites after the battery died overnight. What should be checked?", choices: ["Printer toner", "RAID controller", "Date and time settings", "File share permissions"], answer: 2, topic: "Certificate warnings", explanation: "<p>Incorrect date and time can make valid certificates appear expired or not yet valid. Toner, RAID, and share permissions do not affect HTTPS certificate validation on the phone.</p>" }
    ]
  },
  {
    id: "c2-procedures",
    core: "Core 2",
    domain: "Operational Procedures",
    title: "Safety, Change Management \u0026 Professionalism",
    blurb: "Fixes procedure questions by anchoring safety, backups, documentation, compliance, and customer handling to the right first action.",
    timeMinutes: 10,
    questions: [
      { n: 1, prompt: "Which item belongs in a support ticket after completing work?", choices: ["A coworker's password", "Symptoms, actions taken, results, and resolution", "Unverified rumors about the user", "Credit card numbers"], answer: 1, topic: "Ticket documentation", explanation: "<p>A ticket should record the issue, troubleshooting steps, changes made, outcome, and closure notes. Passwords, rumors, and sensitive payment data do not belong there.</p>" },
      { n: 2, prompt: "Which change-management item describes how to return service to the prior state if the change fails?", choices: ["Scope statement", "Risk register", "Asset tag", "Rollback plan"], answer: 3, topic: "Rollback plan", explanation: "<p>A rollback plan defines how to undo the change. Scope and risk analysis are important, but they do not by themselves restore the previous state.</p>" },
      { n: 3, prompt: "Which backup strategy keeps three copies of data on two media types with one copy off-site?", choices: ["3-2-1 rule", "Single full backup", "RAID 1", "Quick format"], answer: 0, topic: "3-2-1 backups", explanation: "<p>The 3-2-1 rule is three copies, two different media, and one off-site. RAID is availability, not a backup strategy.</p>" },
      { n: 4, prompt: "Which backup type copies changes since the last full backup every time it runs?", choices: ["Incremental", "Synthetic full", "Differential", "Grandfather only"], answer: 2, topic: "Differential backup", explanation: "<p>Differential backups copy changes since the last full backup. Incremental backups copy changes since the last backup of any type, which is the common trap.</p>" },
      { n: 5, prompt: "Which ESD practice is correct when working inside a desktop?", choices: ["Stand on carpet and move quickly", "Use a grounded ESD strap or mat", "Wear wool gloves", "Keep humidity near zero"], answer: 1, topic: "ESD safety", explanation: "<p>A grounded ESD strap or mat helps equalize potential safely. Carpet, wool, and very dry air increase static risk.</p>" },
      { n: 6, prompt: "Which device provides temporary battery power during an outage?", choices: ["Surge suppressor", "Power strip", "Line tester", "UPS"], answer: 3, topic: "Power protection", explanation: "<p>A UPS supplies battery power long enough to ride through short outages or shut down safely. A surge suppressor only clamps excess voltage.</p>" },
      { n: 7, prompt: "A technician discovers possible PHI exposed on a shared workstation. What is the best first response?", choices: ["Stop exposure and follow incident reporting procedures", "Post details in a public chat", "Copy it to a personal drive", "Ignore it unless asked"], answer: 0, topic: "Sensitive data response", explanation: "<p>For regulated data such as PHI, stop further exposure if possible and follow the organization's incident and chain-of-custody procedures. Do not spread or copy the data unnecessarily.</p>" },
      { n: 8, prompt: "A customer is angry and interrupting. Which professional response is best?", choices: ["Match their volume", "Blame the previous technician", "Listen actively and set clear expectations", "Promise a fix you cannot verify"], answer: 2, topic: "Professionalism", explanation: "<p>Professional handling means listen, show respect, avoid blame, and set realistic expectations. False promises and arguments usually make the situation worse.</p>" }
    ]
  }
];
