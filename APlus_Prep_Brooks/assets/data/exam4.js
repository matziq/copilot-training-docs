window.AP_DATA = window.AP_DATA || {};

window.AP_DATA.exam4 = {
  id: "exam4",
  name: "Core 2 (220-1102) \u2014 Diagnostic Exam",
  timeMinutes: 45,
  units: [ { title: "", html: "", questions: [
    {
      n: 1,
      prompt: "<p>A small office wants Windows 11 PCs that can join an Active Directory domain, use BitLocker, and accept incoming Remote Desktop connections for support. Which edition is the minimum appropriate choice?</p>",
      choices: ["Windows 11 Home", "Windows 11 Pro for Workstations", "Windows 11 Pro", "Windows 11 SE"],
      answer: 2,
      topic: "Operating Systems",
      objective: "1.1",
      difficulty: "easy",
      explanation: "<p>Windows 11 Pro is the minimum listed edition that supports domain join, BitLocker management, Group Policy, and Remote Desktop host capabilities.</p><p>Windows 11 Home lacks domain join and RDP host. Windows 11 Pro for Workstations also works but is more than the minimum. Windows 11 SE is a managed education-focused edition and is not the right general business choice.</p>"
    },
    {
      n: 2,
      prompt: "<p>A user reports that a Windows PC can reach local servers but cannot browse websites. Which command should the technician run first to view the IP address, default gateway, and DNS server configuration?</p>",
      choices: ["ipconfig /all", "ping 8.8.8.8", "tracert example.com", "hostname"],
      answer: 0,
      topic: "Operating Systems",
      objective: "1.4",
      difficulty: "easy",
      explanation: "<p>ipconfig /all displays the adapter configuration, including IP address, subnet mask, gateway, DNS servers, DHCP status, and lease information.</p><p>ping 8.8.8.8 tests reachability but does not show configuration. tracert example.com traces a path and may depend on DNS. hostname only displays the computer name.</p>"
    },
    {
      n: 3,
      prompt: "<p>A company is retiring old hard drives that contained unencrypted customer records and wants written proof that the drives were destroyed by a vendor. What documentation should the technician request?</p>",
      choices: ["Warranty replacement form", "Asset inventory export", "Acceptable use policy", "Certificate of destruction"],
      answer: 3,
      topic: "Operational Procedures",
      objective: "4.5",
      difficulty: "easy",
      explanation: "<p>A certificate of destruction documents that media was destroyed according to the required process and provides an auditable record.</p><p>Warranty replacement form concerns hardware service, not secure disposal. Asset inventory export tracks ownership but not destruction. Acceptable use policy defines user behavior and is not proof of disposal.</p>"
    },
    {
      n: 4,
      prompt: "<p>A user receives a phone call from someone claiming to be from the help desk who asks for the user's MFA code to complete a security update. What type of attack is this?</p>",
      choices: ["Whaling", "Vishing", "Dumpster diving", "Evil twin"],
      answer: 1,
      topic: "Security",
      objective: "2.2",
      difficulty: "easy",
      explanation: "<p>Vishing is voice-based phishing, and asking for an MFA code over the phone is a social engineering attempt to bypass authentication.</p><p>Whaling targets high-profile executives. Dumpster diving searches discarded materials. Evil twin uses a rogue wireless access point rather than a phone call.</p>"
    },
    {
      n: 5,
      prompt: "<p>After a Windows update, several system files appear corrupt and built-in apps fail to open. Which command should a technician run first to scan and repair protected Windows system files?</p>",
      choices: ["sfc /scannow", "format C:", "diskpart", "gpupdate /force"],
      answer: 0,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>sfc /scannow checks protected Windows system files and replaces corrupted versions from the component store when possible.</p><p>format C: would erase data and is destructive. diskpart manages disks and partitions, not system file integrity. gpupdate /force refreshes Group Policy and does not repair corrupted files.</p>"
    },
    {
      n: 6,
      prompt: "<p>A user needs to copy 800 GB of department files to a new file server over the network, preserve NTFS permissions, and resume efficiently if interrupted. Which command is BEST?</p>",
      choices: ["xcopy /s", "copy", "robocopy", "format"],
      answer: 2,
      topic: "Operating Systems",
      objective: "1.4",
      difficulty: "medium",
      explanation: "<p>robocopy is designed for resilient file and folder replication and can preserve permissions, retry failed copies, and mirror large directory trees.</p><p>xcopy /s is older and less resilient. copy handles simple file copies and not a full permission-preserving tree well. format prepares a volume and does not copy files.</p>"
    },
    {
      n: 7,
      prompt: "<p>A manager should access payroll files, but interns in the same share should only read training documents. Which principle should guide the permission design?</p>",
      choices: ["Separation of duties", "Principle of least privilege", "Implicit deny only", "Open permissions with auditing"],
      answer: 1,
      topic: "Security",
      objective: "2.1",
      difficulty: "easy",
      explanation: "<p>The principle of least privilege grants users only the access required to perform their job functions and no more.</p><p>Separation of duties splits sensitive tasks among people but is not the direct file-access rule. Implicit deny only describes a default permission behavior. Open permissions with auditing still grants unnecessary access.</p>"
    },
    {
      n: 8,
      prompt: "<p>A change to a line-of-business application must be tested without affecting production data or users. Which change-management activity best meets this need?</p>",
      choices: ["End-user acceptance after release", "Emergency change approval", "Production rollback", "Sandbox testing"],
      answer: 3,
      topic: "Operational Procedures",
      objective: "4.2",
      difficulty: "easy",
      explanation: "<p>Sandbox testing validates a change in an isolated environment before it is introduced to production systems.</p><p>End-user acceptance after release occurs too late to protect production. Emergency change approval is for urgent changes. Production rollback is a recovery plan after a problem, not pre-release testing.</p>"
    },    {
      n: 9,
      prompt: "<p>A Windows laptop displays fake antivirus alerts and redirects searches to unfamiliar sites. According to the CompTIA malware removal process, what should be done immediately after investigating and verifying the symptoms?</p>",
      choices: ["Enable System Restore and create a restore point", "Quarantine the infected system", "Educate the end user", "Schedule scans and run updates"],
      answer: 1,
      topic: "Security",
      objective: "2.4",
      difficulty: "medium",
      explanation: "<p>After investigating and verifying malware symptoms, the next step is to quarantine the infected system to prevent further spread or data leakage.</p><p>Enable System Restore and create a restore point is near the end. Educate the end user is the final step. Schedule scans and run updates happens after remediation.</p>"
    },
    {
      n: 10,
      prompt: "<p>A Windows computer shows a USB controller resource warning in Device Manager after a new capture card is installed. What is the BEST first corrective action?</p>",
      choices: ["Move the device to a different USB controller or port", "Reinstall the operating system", "Delete the user's Windows profile", "Run Disk Cleanup"],
      answer: 0,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>Moving the device to another port or controller can resolve resource or bandwidth conflicts without major changes.</p><p>Reinstall the operating system is excessive. Delete the user's Windows profile addresses profile corruption, not USB controller resources. Run Disk Cleanup frees storage but does not resolve controller conflicts.</p>"
    },
    {
      n: 11,
      prompt: "<p>A user wants a removable USB drive that can store files larger than 4 GB and be read by both Windows and macOS without third-party drivers. Which file system should be used?</p>",
      choices: ["FAT32", "ext4", "NTFS", "exFAT"],
      answer: 3,
      topic: "Operating Systems",
      objective: "1.3",
      difficulty: "easy",
      explanation: "<p>exFAT supports files larger than 4 GB and is broadly supported by Windows and macOS for removable media.</p><p>FAT32 has a 4 GB individual file size limit. ext4 is common on Linux and not natively ideal for Windows or macOS sharing. NTFS is native to Windows but macOS write support is limited by default.</p>"
    },
    {
      n: 12,
      prompt: "<p>A technician is configuring wireless authentication for enterprise users so each user signs in with domain credentials before network access is granted. Which technology is MOST appropriate?</p>",
      choices: ["WPA2-Personal with a shared passphrase", "MAC filtering", "802.1X with RADIUS", "Disabling SSID broadcast"],
      answer: 2,
      topic: "Security",
      objective: "2.3",
      difficulty: "hard",
      explanation: "<p>802.1X with RADIUS provides enterprise authentication and allows individual user or device credentials for network access control.</p><p>WPA2-Personal uses one shared key. MAC filtering is easily spoofed and does not authenticate users. Disabling SSID broadcast hides the name from casual view but does not provide enterprise authentication.</p>"
    },
    {
      n: 13,
      prompt: "<p>A new support technician needs a reference for the exact steps to image a standard workstation, including naming conventions and required post-install checks. Which document should be used?</p>",
      choices: ["Standard operating procedure", "Splash screen", "Incident report", "Procurement request"],
      answer: 0,
      topic: "Operational Procedures",
      objective: "4.1",
      difficulty: "easy",
      explanation: "<p>A standard operating procedure documents repeatable steps for a common technical process such as workstation imaging.</p><p>Splash screen is a startup or login display. Incident report records an event after it occurs. Procurement request starts the purchasing process and does not define technical steps.</p>"
    },
    {
      n: 14,
      prompt: "<p>A Windows user can sign in, but the desktop takes 10 minutes to appear and the Start menu is unreliable. Other users on the same PC are unaffected. What should the technician try after backing up the user's data?</p>",
      choices: ["Replace the system board", "Rebuild the Windows profile", "Disable the firewall profile", "Change the monitor refresh rate"],
      answer: 1,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>A slow profile load affecting only one user commonly points to profile corruption, so rebuilding the Windows profile is appropriate after preserving data.</p><p>Replace the system board does not match a user-specific symptom. Disable the firewall profile affects network filtering. Change the monitor refresh rate addresses display behavior, not profile loading.</p>"
    },
    {
      n: 15,
      prompt: "<p>A 5 TB boot drive is being installed in a modern UEFI desktop. Which partition style should be used to access the full drive capacity?</p>",
      choices: ["MBR", "FAT32", "GPT", "Dynamic disk only"],
      answer: 2,
      topic: "Operating Systems",
      objective: "1.3",
      difficulty: "hard",
      explanation: "<p>GPT supports disks larger than 2 TB and is the standard partition style for UEFI boot on modern systems.</p><p>MBR is limited to about 2 TB per disk. FAT32 is a file system, not a partition style. Dynamic disk only is not required to address the full size and is not the normal UEFI boot choice.</p>"
    },
    {
      n: 16,
      prompt: "<p>A company wants to prevent employees from reading files on stolen Windows laptops, even if the drives are removed and connected to another computer. Which feature should be enabled?</p>",
      choices: ["EFS on one folder", "Windows Defender Firewall", "NTFS compression", "BitLocker"],
      answer: 3,
      topic: "Security",
      objective: "2.6",
      difficulty: "medium",
      explanation: "<p>BitLocker provides full-volume encryption, protecting data at rest if a laptop or drive is stolen.</p><p>EFS on one folder protects only selected files and depends on user certificates. Windows Defender Firewall filters network traffic. NTFS compression reduces storage usage but does not encrypt the whole drive.</p>"
    },    {
      n: 17,
      prompt: "<p>An administrator needs to see which Group Policy settings actually applied to a Windows workstation and user after sign-in. Which command should be used?</p>",
      choices: ["gpupdate /force", "winver", "gpresult /r", "net use"],
      answer: 2,
      topic: "Operating Systems",
      objective: "1.4",
      difficulty: "medium",
      explanation: "<p>gpresult /r reports the resultant set of policy information for the computer and user, including applied GPOs.</p><p>gpupdate /force refreshes policy but does not summarize the result. winver displays Windows version information. net use manages mapped drives and network connections.</p>"
    },
    {
      n: 18,
      prompt: "<p>A user's mobile phone becomes hot, battery life drops sharply, and the carrier sends a data-usage limit notification even though usage habits have not changed. What should the technician suspect FIRST?</p>",
      choices: ["A normal OS update completed successfully", "Possible malware or unwanted application behavior", "Screen autorotation is disabled", "The display brightness is too low"],
      answer: 1,
      topic: "Software Troubleshooting",
      objective: "3.4",
      difficulty: "medium",
      explanation: "<p>Unexpected battery drain, heat, and high network traffic can indicate malware or an unwanted app transmitting data in the background.</p><p>A normal OS update completed successfully would not usually cause ongoing high data use. Screen autorotation is disabled affects orientation only. The display brightness is too low would not explain carrier data warnings.</p>"
    },
    {
      n: 19,
      prompt: "<p>A technician must keep at least three copies of critical data, store them on two different media types, and keep one copy off-site. Which backup strategy is being applied?</p>",
      choices: ["Grandfather-father-son", "Synthetic full", "Differential backup", "3-2-1 backup rule"],
      answer: 3,
      topic: "Operational Procedures",
      objective: "4.3",
      difficulty: "medium",
      explanation: "<p>The 3-2-1 rule means three copies of data, on two different media types, with one copy stored off-site.</p><p>Grandfather-father-son is a rotation schedule. Synthetic full creates a full backup from existing backup sets. Differential backup captures changes since the last full backup.</p>"
    },
    {
      n: 20,
      prompt: "<p>A user connects to a coffee shop Wi-Fi network named similarly to the shop's real network. The attacker intercepts traffic through the rogue access point. What is this attack called?</p>",
      choices: ["Evil twin", "Tailgating", "Rootkit", "Degaussing"],
      answer: 0,
      topic: "Security",
      objective: "2.2",
      difficulty: "easy",
      explanation: "<p>An evil twin is a rogue wireless access point that imitates a legitimate network to capture or manipulate user traffic.</p><p>Tailgating is following someone into a secure area. Rootkit is stealthy malware. Degaussing is magnetic media destruction, not a wireless attack.</p>"
    },
    {
      n: 21,
      prompt: "<p>A user needs to confirm whether a Windows 10 Home PC can be upgraded in place to Windows 11 Pro while keeping compatible apps and data. What should the technician verify FIRST?</p>",
      choices: ["That the target disk uses FAT32", "That the hardware meets Windows 11 requirements and the upgrade path is supported", "That the PC is joined to a domain before the upgrade", "That System Restore is disabled permanently"],
      answer: 1,
      topic: "Operating Systems",
      objective: "1.2",
      difficulty: "hard",
      explanation: "<p>Before an in-place upgrade, the technician should verify hardware requirements, application compatibility, licensing, and that the source-to-target upgrade path is supported.</p><p>That the target disk uses FAT32 is not required and would be inappropriate for the system volume. That the PC is joined to a domain before the upgrade is not required. That System Restore is disabled permanently is not an upgrade prerequisite.</p>"
    },
    {
      n: 22,
      prompt: "<p>A help desk technician is assisting a frustrated customer whose printer repeatedly fails. Which communication approach is BEST?</p>",
      choices: ["Explain that printers are always unreliable", "Interrupt frequently to speed up troubleshooting", "Use active listening, clarify the symptoms, and set expectations", "Tell the customer to read the manual before calling"],
      answer: 2,
      topic: "Operational Procedures",
      objective: "4.7",
      difficulty: "medium",
      explanation: "<p>Active listening, clarifying details, and setting expectations demonstrate professionalism and help resolve the problem efficiently.</p><p>Explain that printers are always unreliable is dismissive. Interrupt frequently to speed up troubleshooting can miss important information. Tell the customer to read the manual before calling is unprofessional.</p>"
    },
    {
      n: 23,
      prompt: "<p>A user can open a shared folder over the network but cannot modify files inside it. The share permission grants Change to Everyone, while NTFS permission grants Read to the user's group. What effective permission does the user have over the network?</p>",
      choices: ["Full Control", "Change only", "No access", "Read only"],
      answer: 3,
      topic: "Security",
      objective: "2.1",
      difficulty: "hard",
      explanation: "<p>When share and NTFS permissions both apply, the most restrictive combined permission wins, so the user's effective access is Read only.</p><p>Full Control is not granted by either layer. Change only ignores the more restrictive NTFS Read permission. No access would require a deny or no applicable permission, which is not described.</p>"
    },
    {
      n: 24,
      prompt: "<p>A Windows laptop fails with No OS found immediately after a disk replacement. The technician needs to choose a one-time network boot to image the device. Which boot method should be selected?</p>",
      choices: ["PXE", "Internet Recovery", "Safe Mode", "FileVault"],
      answer: 0,
      topic: "Operating Systems",
      objective: "1.2",
      difficulty: "medium",
      explanation: "<p>PXE allows a system to boot from the network and is commonly used for deployment or imaging when no local OS is available.</p><p>Internet Recovery is a macOS recovery method. Safe Mode requires a local Windows installation. FileVault is macOS disk encryption, not a boot imaging method.</p>"
    },    {
      n: 25,
      prompt: "<p>A user reports frequent pop-ups, browser redirection, and a new extension that cannot be removed normally. Which action is most appropriate during remediation?</p>",
      choices: ["Disable System Restore after cleanup is complete", "Update anti-malware definitions and scan to remove the unwanted software", "Create a public Wi-Fi hotspot", "Ignore the extension if the browser still opens"],
      answer: 1,
      topic: "Software Troubleshooting",
      objective: "3.3",
      difficulty: "hard",
      explanation: "<p>During malware remediation, the technician should update anti-malware tools and scan to remove unwanted software such as malicious browser extensions.</p><p>Disable System Restore after cleanup is complete is out of order; it is disabled before remediation and re-enabled later. Create a public Wi-Fi hotspot is unrelated. Ignore the extension if the browser still opens leaves the threat in place.</p>"
    },
    {
      n: 26,
      prompt: "<p>A technician is replacing RAM in a desktop at a workbench. Which safety measure best reduces the chance of electrostatic discharge damage?</p>",
      choices: ["Use an ESD strap connected to a proper ground", "Wear safety goggles only", "Place the computer on carpet", "Hold modules by the gold contacts"],
      answer: 0,
      topic: "Operational Procedures",
      objective: "4.4",
      difficulty: "easy",
      explanation: "<p>An ESD strap connected to a proper ground equalizes electrical potential and helps prevent static discharge into components.</p><p>Wear safety goggles only protects eyes but not electronics. Place the computer on carpet increases static risk. Hold modules by the gold contacts can contaminate or damage them.</p>"
    },
    {
      n: 27,
      prompt: "<p>A user has a Windows 11 Pro laptop and wants a local tool to create a custom recurring script that runs every Monday at 7:00 AM. Which administrative tool should be used?</p>",
      choices: ["Device Manager", "Certificate Manager", "Task Scheduler", "Disk Management"],
      answer: 2,
      topic: "Operating Systems",
      objective: "1.5",
      difficulty: "medium",
      explanation: "<p>Task Scheduler creates and manages scheduled tasks, including recurring scripts at specific days and times.</p><p>Device Manager manages hardware drivers. Certificate Manager manages certificates. Disk Management manages disks, partitions, and volumes.</p>"
    },
    {
      n: 28,
      prompt: "<p>A smartphone app fails to launch after an update, while other apps work normally. What should the technician try FIRST?</p>",
      choices: ["Clear the app cache or update/reinstall the application", "Factory reset the phone immediately", "Disable all cellular data permanently", "Replace the SIM card"],
      answer: 0,
      topic: "Software Troubleshooting",
      objective: "3.4",
      difficulty: "medium",
      explanation: "<p>For a single mobile app that fails after an update, clearing cache and updating or reinstalling the app targets the affected software with minimal disruption.</p><p>Factory reset the phone immediately is excessive. Disable all cellular data permanently does not fix a broken app. Replace the SIM card addresses cellular identity or connectivity, not an app crash.</p>"
    },
    {
      n: 29,
      prompt: "<p>A company wants a badge-controlled entry area where one door must close before the second door opens, preventing unauthorized people from following employees inside. Which physical security control is this?</p>",
      choices: ["Bollard", "Lighting", "Access control vestibule", "Cable lock"],
      answer: 2,
      topic: "Security",
      objective: "2.1",
      difficulty: "easy",
      explanation: "<p>An access control vestibule, also called a mantrap, uses two controlled doors to restrict entry and reduce tailgating.</p><p>Bollard blocks vehicle access. Lighting improves visibility and deterrence. Cable lock physically secures equipment, not room entry sequencing.</p>"
    },
    {
      n: 30,
      prompt: "<p>A developer provides a PowerShell script to automate user account creation on Windows workstations. Which file extension should the technician expect?</p>",
      choices: [".sh", ".vbs", ".js", ".ps1"],
      answer: 3,
      topic: "Operational Procedures",
      objective: "4.8",
      difficulty: "medium",
      explanation: "<p>PowerShell scripts typically use the .ps1 file extension on Windows systems.</p><p>.sh is commonly a shell script on Linux or macOS. .vbs is VBScript. .js is JavaScript and is not the normal extension for a PowerShell script.</p>"
    },
    {
      n: 31,
      prompt: "<p>A Windows PC can browse to intranet sites by IP address but not by host name. Which command is BEST to query DNS records directly?</p>",
      choices: ["nslookup", "netstat", "pathping", "shutdown /r"],
      answer: 0,
      topic: "Operating Systems",
      objective: "1.4",
      difficulty: "hard",
      explanation: "<p>nslookup queries DNS servers and is the best listed tool for testing name resolution records directly.</p><p>netstat displays network connections and listening ports. pathping combines ping and route analysis but is not a direct DNS query tool. shutdown /r restarts the computer.</p>"
    },
    {
      n: 32,
      prompt: "<p>An employee reports that a browser shows certificate warnings when visiting the company's banking site from one laptop, but the site is fine from other devices. What should the technician check FIRST?</p>",
      choices: ["Whether the laptop date and time are correct", "Whether the mouse driver is current", "Whether FAT32 is used on USB drives", "Whether the user has too many desktop icons"],
      answer: 0,
      topic: "Software Troubleshooting",
      objective: "3.3",
      difficulty: "medium",
      explanation: "<p>Incorrect system date or time can make otherwise valid certificates appear expired or not yet valid, causing browser certificate warnings.</p><p>Whether the mouse driver is current is unrelated. Whether FAT32 is used on USB drives does not affect TLS validation. Whether the user has too many desktop icons does not cause certificate errors.</p>"
    },    {
      n: 33,
      prompt: "<p>A technician must let a vendor remotely administer a Linux server across an encrypted command-line session. Which remote access technology is most appropriate?</p>",
      choices: ["VNC", "RDP", "SSH", "MSRA"],
      answer: 2,
      topic: "Operational Procedures",
      objective: "4.9",
      difficulty: "medium",
      explanation: "<p>SSH provides encrypted remote command-line access and is commonly used to administer Linux systems securely.</p><p>VNC is mainly graphical remote control. RDP is typically for Windows graphical sessions. MSRA is Microsoft Remote Assistance for Windows support scenarios.</p>"
    },
    {
      n: 34,
      prompt: "<p>A Windows user stores sensitive individual files in a shared folder and wants only those files encrypted under the user's certificate. Which feature best fits this request?</p>",
      choices: ["BitLocker To Go", "Encrypting File System", "Windows Defender Firewall", "UAC"],
      answer: 1,
      topic: "Security",
      objective: "2.6",
      difficulty: "hard",
      explanation: "<p>Encrypting File System encrypts individual NTFS files or folders using the user's certificate-based keys.</p><p>BitLocker To Go encrypts removable drives. Windows Defender Firewall controls network traffic. UAC prompts for elevated privileges and does not encrypt files.</p>"
    },
    {
      n: 35,
      prompt: "<p>A technician needs to identify the Linux processes consuming the most CPU in real time. Which command should be used?</p>",
      choices: ["chmod", "top", "cat", "pwd"],
      answer: 1,
      topic: "Operating Systems",
      objective: "1.6",
      difficulty: "easy",
      explanation: "<p>top displays running processes and resource usage dynamically, making it useful for identifying CPU-heavy processes.</p><p>chmod changes permissions. cat displays file contents. pwd prints the current working directory.</p>"
    },
    {
      n: 36,
      prompt: "<p>A user complains that a Windows application crashes immediately after launch. The vendor release notes state that the new version requires 16 GB of RAM, but the PC has 8 GB. What is the BEST fix?</p>",
      choices: ["Rebuild the Windows profile", "Disable System Restore", "Change the SSID", "Add resources to meet the application requirements"],
      answer: 3,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "hard",
      explanation: "<p>If the application does not meet documented hardware requirements, adding resources such as RAM directly addresses the likely cause.</p><p>Rebuild the Windows profile helps profile corruption. Disable System Restore is a malware-removal step and not a performance fix. Change the SSID affects wireless network naming.</p>"
    },
    {
      n: 37,
      prompt: "<p>A SOHO router is still using the factory administrator password and outdated firmware. Which hardening step should be performed FIRST?</p>",
      choices: ["Enable port forwarding to the router admin page", "Disable all encryption", "Increase DHCP lease time", "Change the default administrator credentials"],
      answer: 3,
      topic: "Security",
      objective: "2.9",
      difficulty: "medium",
      explanation: "<p>Changing default administrator credentials is a critical first hardening step because defaults are widely known and commonly attacked.</p><p>Enable port forwarding to the router admin page increases exposure. Disable all encryption weakens security. Increase DHCP lease time does not address unauthorized administration.</p>"
    },
    {
      n: 38,
      prompt: "<p>An office experiences brief power drops that cause desktops to reboot and corrupt open files. Which device should be installed to provide short-term power and safe shutdown time?</p>",
      choices: ["Surge suppressor only", "ESD mat", "Battery backup UPS", "Toner vacuum"],
      answer: 2,
      topic: "Operational Procedures",
      objective: "4.4",
      difficulty: "medium",
      explanation: "<p>A battery backup UPS provides temporary power during brownouts or blackouts so systems can continue briefly or shut down safely.</p><p>Surge suppressor only helps with voltage spikes but not sustained power loss. ESD mat reduces static discharge. Toner vacuum is for printer maintenance cleanup.</p>"
    },
    {
      n: 39,
      prompt: "<p>A Windows workstation repeatedly shows BSODs after a new graphics driver is installed. What should the technician try FIRST?</p>",
      choices: ["Create a new DHCP reservation", "Clear the browser cache", "Degauss the SSD", "Roll back the graphics driver or update to a stable version"],
      answer: 3,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>A BSOD that starts immediately after a driver change should be addressed by rolling back or replacing the faulty driver.</p><p>Create a new DHCP reservation affects IP assignment. Clear the browser cache helps web display issues. Degauss the SSD is ineffective for SSDs and would not troubleshoot a driver crash.</p>"
    },
    {
      n: 40,
      prompt: "<p>A technician is configuring a shared Windows PC for shift workers and wants to prevent standard users from silently installing software that requires administrative rights. Which feature helps enforce this?</p>",
      choices: ["Private browsing", "UAC", "Metered connection", "Spotlight"],
      answer: 1,
      topic: "Security",
      objective: "2.6",
      difficulty: "medium",
      explanation: "<p>User Account Control prompts for elevation when a task requires administrative privileges, helping prevent silent system-level changes by standard users.</p><p>Private browsing limits local browser history. Metered connection changes network data behavior. Spotlight is a macOS search feature and does not enforce Windows elevation.</p>"
    }
  ] } ]
};