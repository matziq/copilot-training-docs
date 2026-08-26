window.AP_DATA = window.AP_DATA || {};

window.AP_DATA.exam5 = {
  id: "exam5",
  name: "Core 2 (220-1102) \u2014 Practice Exam 1",
  timeMinutes: 60,
  units: [ { title: "", html: "", questions: [
    {
      n: 1,
      prompt: "<p>A small office wants Windows 11 PCs that can join an Active Directory domain, host incoming Remote Desktop sessions, use BitLocker, and open <code>gpedit.msc</code>. Which edition is the minimum appropriate choice?</p>",
      choices: ["Windows 11 Home", "Windows 11 SE", "Windows 11 Pro", "Windows 11 in S mode"],
      answer: 2,
      topic: "Operating Systems",
      objective: "1.1",
      difficulty: "easy",
      explanation: "<p>Windows 11 Pro is the minimum client edition in this list that supports domain join, BitLocker management, Local Group Policy Editor, and acting as a Remote Desktop host.</p><p>Windows 11 Home can use the Remote Desktop client but not host RDP or join a domain. Windows 11 SE is education-focused and restricted. Windows 11 in S mode limits app installation and does not add Pro management features.</p>"
    },
    {
      n: 2,
      prompt: "<p>A data center is being redesigned after several people entered by following employees through a locked door. Which physical control best prevents one person from tailgating behind another?</p>",
      choices: ["Access control vestibule", "Bollards", "Equipment lock", "Security lighting"],
      answer: 0,
      topic: "Security",
      objective: "2.1",
      difficulty: "medium",
      explanation: "<p>An access control vestibule, also called a mantrap, allows one person through a controlled space at a time and is designed to stop tailgating.</p><p>Bollards stop vehicles, not a person following through a doorway. An equipment lock protects a device from theft. Security lighting improves visibility but does not enforce one-person entry.</p>"
    },
    {
      n: 3,
      prompt: "<p>A Windows workstation shows a blue screen with a stop code after a storage driver update. What should the technician do first to gather useful troubleshooting information?</p>",
      choices: ["Reimage the computer immediately", "Replace the system board", "Disable all startup applications", "Record the stop code and recent change"],
      answer: 3,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>Recording the stop code and the recent driver change preserves the key facts needed to choose a focused remedy such as rolling back the driver or using Safe Mode.</p><p>Reimage the computer is a last resort. Replace the system board is unsupported without hardware evidence. Disable all startup applications may help application conflicts, but it ignores the storage driver clue.</p>"
    },
    {
      n: 4,
      prompt: "<p>A help desk ticket for a laptop repair is missing information needed for later reporting and trend analysis. Which set of fields is most appropriate to add?</p>",
      choices: ["Favorite application, preferred browser, and desk location", "Asset ID, user contact, problem description, category, status, and resolution", "Purchase price only", "Technician initials and a free-form note only"],
      answer: 1,
      topic: "Operational Procedures",
      objective: "4.1",
      difficulty: "hard",
      explanation: "<p>Asset ID, contact, description, category, status, and resolution connect the ticket to the device, the user, the issue, workflow state, and final fix for reporting.</p><p>Favorite application, preferred browser, and desk location omit repair details. Purchase price only belongs in asset records. Technician initials and a free-form note are not structured enough for useful ticket tracking.</p>"
    },
    {
      n: 5,
      prompt: "<p>A user wants to keep installed applications and personal files while moving from Windows 10 Pro to Windows 11 Pro on supported hardware. Which installation method best fits?</p>",
      choices: ["In-place upgrade", "Clean installation", "32-bit installation", "PXE wipe and load"],
      answer: 0,
      topic: "Operating Systems",
      objective: "1.2",
      difficulty: "easy",
      explanation: "<p>An in-place upgrade preserves compatible applications, settings, and files while upgrading the existing Windows installation.</p><p>A clean installation starts over and requires reinstalling applications. A 32-bit installation cannot upgrade to Windows 11 and limits memory support. PXE wipe and load is a network deployment that normally erases or replaces the existing image.</p>"
    },
    {
      n: 6,
      prompt: "<p>A company requires users to sign in with a password and a changing code from an authenticator app. Which MFA factor category does the app code represent?</p>",
      choices: ["Something you are", "Somewhere you are", "Something you have", "Something you do"],
      answer: 2,
      topic: "Security",
      objective: "2.2",
      difficulty: "medium",
      explanation: "<p>An authenticator app or token code represents something you have because the user must possess the enrolled device or token.</p><p>Something you are is biometrics. Somewhere you are is location. Something you do is a behavioral factor such as a gesture or typing pattern, not the app-generated code.</p>"
    },
    {
      n: 7,
      prompt: "<p>After a failed disk clone, a PC displays <code>No operating system found</code>. In Windows Recovery Environment, which command is most directly used to rebuild the Boot Configuration Data store?</p>",
      choices: ["sfc /scannow", "bootrec /rebuildbcd", "chkdsk /r", "dism /restorehealth"],
      answer: 1,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "easy",
      explanation: "<p><code>bootrec /rebuildbcd</code> scans for Windows installations and rebuilds the BCD store used during boot.</p><p><code>sfc /scannow</code> repairs protected system files after Windows is accessible. <code>chkdsk /r</code> checks disk sectors and file system structure. <code>dism /restorehealth</code> repairs the component store, not the boot database.</p>"
    },
    {
      n: 8,
      prompt: "<p>A payroll application update will change database tables and client settings. Which change management item most directly helps restore service if the update fails?</p>",
      choices: ["End-user acceptance form", "Change board agenda", "Risk score", "Rollback plan"],
      answer: 3,
      topic: "Operational Procedures",
      objective: "4.1",
      difficulty: "hard",
      explanation: "<p>A rollback plan documents the tested steps for returning systems and data to the previous working state if the change fails.</p><p>An end-user acceptance form confirms the result after testing. A change board agenda schedules review. A risk score helps decide whether to approve the change, but it does not restore service.</p>"
    },
    {
      n: 9,
      prompt: "<p>A technician is checking whether older hardware can run Windows 11. Which combination is required for a standard Windows 11 installation?</p>",
      choices: ["Legacy BIOS, MBR boot disk, and 2 GB RAM", "UEFI firmware, Secure Boot capability, and TPM 2.0", "Optical drive, FAT32 system volume, and TPM 1.2", "32-bit CPU, PXE support, and local administrator account"],
      answer: 1,
      topic: "Operating Systems",
      objective: "1.2",
      difficulty: "medium",
      explanation: "<p>Windows 11 requires UEFI with Secure Boot capability and TPM 2.0, along with other CPU, RAM, and storage requirements.</p><p>Legacy BIOS with MBR does not meet the Windows 11 boot security requirements. An optical drive and FAT32 system volume are not the standard requirement, and TPM 1.2 is insufficient. Windows 11 does not support 32-bit CPUs.</p>"
    },
    {
      n: 10,
      prompt: "<p>A manager wants temporary contractors to access only one project share and receive a mapped drive at sign-in. Which Active Directory approach best follows least privilege?</p>",
      choices: ["Create a security group for the contractors, assign only the needed ACLs, and use a login script or GPO for the drive mapping", "Add every contractor to Domain Admins and remove them later", "Place all contractor accounts in the Computers container", "Give permissions to each user directly and avoid groups"],
      answer: 0,
      topic: "Security",
      objective: "2.2",
      difficulty: "easy",
      explanation: "<p>A security group with only the required ACLs and a GPO or login script for mapping applies least privilege and is easy to manage.</p><p>Domain Admins grants excessive rights. The Computers container is for computer objects, not user access control. Direct user permissions are harder to audit and maintain than group-based access.</p>"
    },
    {
      n: 11,
      prompt: "<p>A line-of-business application fails because its Windows background service is stopped. Which tool is designed to start the service and set its startup type?</p>",
      choices: ["eventvwr.msc", "devmgmt.msc", "services.msc", "diskmgmt.msc"],
      answer: 2,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p><code>services.msc</code> opens the Services console, where a technician can start, stop, restart, and configure service startup type.</p><p><code>eventvwr.msc</code> reviews logs but does not configure services. <code>devmgmt.msc</code> manages hardware drivers. <code>diskmgmt.msc</code> manages partitions and volumes.</p>"
    },
    {
      n: 12,
      prompt: "<p>A server was backed up with a full backup on Sunday and incremental backups Monday through Thursday. The server fails Friday morning. What is required to restore to Thursday night?</p>",
      choices: ["Only the Thursday incremental backup", "The full backup and the Thursday incremental backup", "The latest differential backup only", "The Sunday full backup plus each incremental backup from Monday through Thursday"],
      answer: 3,
      topic: "Operational Procedures",
      objective: "4.2",
      difficulty: "hard",
      explanation: "<p>Incremental backups contain changes since the previous backup, so restoration needs the last full backup and every incremental in order through the desired point.</p><p>Only the Thursday incremental lacks the baseline and earlier changes. The full backup and Thursday incremental skip Monday through Wednesday changes. The latest differential would work only in a differential backup scheme.</p>"
    },
    {
      n: 13,
      prompt: "<p>A technician needs to reinstall Windows on a laptop with no working internal recovery partition and no optical drive. Which boot method is most practical on site?</p>",
      choices: ["Bootable USB installation media", "Internet-based macOS recovery", "PXE boot with no deployment server", "FAT32 data partition"],
      answer: 0,
      topic: "Operating Systems",
      objective: "1.2",
      difficulty: "medium",
      explanation: "<p>Bootable USB installation media is a practical local method for installing Windows when the recovery partition and optical drive are unavailable.</p><p>Internet-based macOS recovery applies to compatible Macs, not Windows PCs. PXE requires network boot infrastructure and a deployment server. A FAT32 data partition is a file system location, not an installer boot method by itself.</p>"
    },
    {
      n: 14,
      prompt: "<p>A folder is shared as Change and has NTFS permissions set to Read for a user. The user connects over the network. What effective permission applies?</p>",
      choices: ["Change, because share permissions override NTFS", "Read, because the most restrictive combination applies", "Full Control, because the user authenticated successfully", "No access, because share and NTFS permissions cannot be combined"],
      answer: 1,
      topic: "Security",
      objective: "2.6",
      difficulty: "easy",
      explanation: "<p>When accessing a folder over the network, share and NTFS permissions both apply, and the most restrictive effective permission wins, so the user has Read.</p><p>Change is a trap because share permissions do not override stricter NTFS permissions. Full Control is not granted by authentication alone. No access is wrong because compatible share and NTFS permissions can combine.</p>"
    },
    {
      n: 15,
      prompt: "<p>A user reports browser redirects, fake antivirus pop-ups, and repeated certificate warnings after installing a free toolbar. Which category best describes these symptoms?</p>",
      choices: ["Windows feature update failure", "Mobile app permission issue", "Normal private browsing behavior", "Possible malware or unwanted software infection"],
      answer: 3,
      topic: "Software Troubleshooting",
      objective: "3.2",
      difficulty: "medium",
      explanation: "<p>Browser redirection, false security alerts, and certificate warnings after an untrusted toolbar are classic signs of malware, adware, or another unwanted program.</p><p>Windows feature update failure would center on update errors. Mobile app permission issue applies to a mobile device. Normal private browsing does not create fake antivirus alerts or certificate warnings.</p>"
    },
    {
      n: 16,
      prompt: "<p>A small electrical fire starts near a powered workstation. Which extinguisher class should be used while following site safety procedures?</p>",
      choices: ["Class A", "Class B", "Class C", "Class K"],
      answer: 2,
      topic: "Operational Procedures",
      objective: "4.3",
      difficulty: "hard",
      explanation: "<p>Class C extinguishers are rated for energized electrical equipment and are the appropriate class for a fire near powered electronics.</p><p>Class A is for ordinary combustibles such as paper or wood. Class B is for flammable liquids. Class K is for cooking oils and commercial kitchen fires.</p>"
    },
    {
      n: 17,
      prompt: "<p>A technician is partitioning a 6 TB boot drive for a modern Windows 11 PC using UEFI. Which partition style should be selected?</p>",
      choices: ["MBR, because it supports more than 2 TB", "MBR, because it supports 128 primary partitions", "Dynamic only, because UEFI cannot boot basic disks", "GPT, because it supports large disks and UEFI boot"],
      answer: 3,
      topic: "Operating Systems",
      objective: "1.2",
      difficulty: "medium",
      explanation: "<p>GPT is designed for UEFI systems and supports disks larger than 2 TB and many partitions, commonly up to 128 in Windows.</p><p>MBR is limited to about 2 TB and four primary partitions. The claim that MBR supports 128 primary partitions is the GPT feature. Dynamic disks are not required simply because the firmware is UEFI.</p>"
    },
    {
      n: 18,
      prompt: "<p>A user needs to encrypt a removable USB drive so it can be unlocked on other Windows PCs with a password. Which feature should be used?</p>",
      choices: ["Encrypting File System", "BitLocker To Go", "TPM ownership", "Windows Hello"],
      answer: 1,
      topic: "Security",
      objective: "2.6",
      difficulty: "easy",
      explanation: "<p>BitLocker To Go is designed to encrypt removable drives and allow unlock methods such as a password or recovery key.</p><p>Encrypting File System encrypts individual files for a user account and is not ideal for portable whole-drive protection. TPM ownership supports platform-based keys for internal drives. Windows Hello is an authentication method, not removable drive encryption.</p>"
    },
    {
      n: 19,
      prompt: "<p>A tablet app opens and immediately closes after an update. Other apps work normally. Which action should the technician try first?</p>",
      choices: ["Force close the app, clear its cache if available, and install the latest app update", "Factory reset the tablet without backup", "Replace the tablet battery", "Disable Wi-Fi permanently"],
      answer: 0,
      topic: "Software Troubleshooting",
      objective: "3.3",
      difficulty: "medium",
      explanation: "<p>For a single mobile app that fails to launch or stay open, force closing it, clearing app data or cache when appropriate, and updating or reinstalling the app are focused first steps.</p><p>Factory reset is a last resort. Replace the tablet battery targets power symptoms, not one crashing app. Disable Wi-Fi permanently may prevent updates and does not address the app fault.</p>"
    },
    {
      n: 20,
      prompt: "<p>A technician discovers suspected illegal content on a company laptop during malware cleanup. What should the technician do first?</p>",
      choices: ["Open several files to confirm the content", "Copy the files to a personal USB drive", "Identify, report, and preserve the evidence according to policy", "Delete the folder to protect the company"],
      answer: 2,
      topic: "Operational Procedures",
      objective: "4.5",
      difficulty: "hard",
      explanation: "<p>The first response is to identify the situation, report it through the proper channel, and preserve evidence so chain of custody is not damaged.</p><p>Opening several files may alter metadata and exceed the technician role. Copying files to a personal USB drive breaks custody and may spread prohibited content. Deleting the folder destroys evidence.</p>"
    },
    {
      n: 21,
      prompt: "<p>A technician needs to view Windows logs for repeated application crashes. Which Microsoft Management Console snap-in should be opened?</p>",
      choices: ["diskmgmt.msc", "eventvwr.msc", "certmgr.msc", "lusrmgr.msc"],
      answer: 1,
      topic: "Operating Systems",
      objective: "1.4",
      difficulty: "medium",
      explanation: "<p><code>eventvwr.msc</code> opens Event Viewer, where Application and System logs can show crash events, service errors, and related details.</p><p><code>diskmgmt.msc</code> manages disks and volumes. <code>certmgr.msc</code> manages user certificates. <code>lusrmgr.msc</code> manages local users and groups on supported editions.</p>"
    },
    {
      n: 22,
      prompt: "<p>A wireless upgrade must use modern encryption, avoid TKIP, and improve protection against offline password guessing compared with WPA2-Personal. Which option best fits?</p>",
      choices: ["WEP with RC4", "WPA with TKIP", "Open SSID with MAC filtering", "WPA3-Personal with AES-based encryption"],
      answer: 3,
      topic: "Security",
      objective: "2.3",
      difficulty: "easy",
      explanation: "<p>WPA3-Personal uses stronger modern protections than WPA2-Personal and avoids obsolete TKIP in favor of AES-based encryption methods.</p><p>WEP with RC4 is broken. WPA with TKIP is legacy and weak. Open SSID with MAC filtering provides little real security and does not encrypt traffic.</p>"
    },
    {
      n: 23,
      prompt: "<p>A workstation shows low memory warnings and becomes sluggish only when a new design application is running. What is the best long-term fix?</p>",
      choices: ["Flush DNS", "Run Disk Cleanup only", "Add RAM after verifying application requirements", "Change the firewall profile to Public"],
      answer: 2,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>If the application exceeds available memory, verifying its requirements and adding RAM directly addresses the low-memory and sluggish-performance symptoms.</p><p>Flush DNS fixes name resolution cache issues. Disk Cleanup may free storage, not RAM pressure. Changing the firewall profile affects network exposure and does not add system resources.</p>"
    },
    {
      n: 24,
      prompt: "<p>A company wants to track each laptop from request through retirement, including purchase approval, assignment, warranty, and disposal. What process is being described?</p>",
      choices: ["Asset management and procurement lifecycle", "Incident response only", "Knowledge base article review", "Daily backup rotation"],
      answer: 0,
      topic: "Operational Procedures",
      objective: "4.1",
      difficulty: "hard",
      explanation: "<p>Asset management and the procurement lifecycle track devices from request and purchase through deployment, support, warranty, and retirement or disposal.</p><p>Incident response handles security events. Knowledge base article review improves support documentation. Daily backup rotation protects data but does not manage hardware ownership and lifecycle.</p>"
    },
    {
      n: 25,
      prompt: "<p>A user wants the laptop to start faster, but hibernation must remain available for travel. Which Control Panel applet contains the Fast Startup and hibernate settings?</p>",
      choices: ["Indexing Options", "Internet Options", "Power Options", "File Explorer Options"],
      answer: 2,
      topic: "Operating Systems",
      objective: "1.5",
      difficulty: "medium",
      explanation: "<p>Power Options contains power button behavior, sleep and hibernate settings, and the Fast Startup option that uses hibernation technology.</p><p>Indexing Options controls search indexing. Internet Options manages browser and proxy-related settings. File Explorer Options changes folder and file display behavior.</p>"
    },
    {
      n: 26,
      prompt: "<p>A network team wants centralized wireless authentication that can work with 802.1X for client access. Which service is most commonly used?</p>",
      choices: ["RADIUS", "TACACS+", "Kerberos", "Local SAM"],
      answer: 0,
      topic: "Security",
      objective: "2.3",
      difficulty: "easy",
      explanation: "<p>RADIUS is commonly used with 802.1X to provide centralized authentication, authorization, and accounting for wireless and wired network access.</p><p>TACACS+ is more common for administrative access to network devices. Kerberos is a domain authentication protocol, not the usual 802.1X AAA service. Local SAM is a Windows local account database.</p>"
    },
    {
      n: 27,
      prompt: "<p>A phone shows a sudden data-usage warning, high network traffic while idle, and unexpected app behavior. What is the most likely category of issue?</p>",
      choices: ["Autorotate sensor calibration", "Mobile malware or compromised app", "Normal carrier roaming", "Low screen brightness"],
      answer: 1,
      topic: "Software Troubleshooting",
      objective: "3.4",
      difficulty: "medium",
      explanation: "<p>High data usage, unexpected behavior, and background traffic can indicate a malicious or compromised mobile app sending data without user intent.</p><p>Autorotate calibration affects screen orientation. Normal carrier roaming should not cause unexpected app behavior. Low screen brightness affects display visibility, not network traffic.</p>"
    },
    {
      n: 28,
      prompt: "<p>Before replacing a core switch, a technician tests the procedure in a lab, documents affected users, estimates outage impact, and obtains approval. Which change items are shown?</p>",
      choices: ["Only end-user training", "Only asset disposal", "Only licensing compliance", "Sandbox testing, scope, risk analysis, and change approval"],
      answer: 3,
      topic: "Operational Procedures",
      objective: "4.1",
      difficulty: "hard",
      explanation: "<p>The lab test is sandbox testing, affected users define scope, outage impact is risk analysis, and formal permission is change approval.</p><p>End-user training may follow but is not the core of this scenario. Asset disposal is unrelated to replacing a switch in production. Licensing compliance concerns software rights, not the described change controls.</p>"
    },
    {
      n: 29,
      prompt: "<p>A remote employee needs Windows to avoid large downloads while tethered to a phone hotspot. Which setting should be enabled for that Wi-Fi connection?</p>",
      choices: ["Metered connection", "Domain firewall profile", "Printer sharing", "Network discovery for all networks"],
      answer: 0,
      topic: "Operating Systems",
      objective: "1.6",
      difficulty: "medium",
      explanation: "<p>Marking the Wi-Fi network as a metered connection tells Windows to reduce background data use, including some automatic downloads.</p><p>The Domain firewall profile applies when connected to a domain network. Printer sharing exposes printers and does not limit data. Network discovery makes devices visible and is not a bandwidth control.</p>"
    },
    {
      n: 30,
      prompt: "<p>A malware response is underway. The technician has verified symptoms, quarantined the system, disabled System Restore, removed the malware, and scheduled scans. What is the next step in the CompTIA malware removal process?</p>",
      choices: ["Educate the end user", "Reinstall every application", "Enable System Restore and create a restore point", "Replace the hard drive"],
      answer: 2,
      topic: "Security",
      objective: "2.4",
      difficulty: "easy",
      explanation: "<p>After remediation and scheduled scans, the next step is to re-enable System Restore and create a clean restore point before final user education.</p><p>Educate the end user is the final step, not the next one here. Reinstall every application is not required unless damaged. Replace the hard drive is unnecessary without hardware failure or unrecoverable infection.</p>"
    },
    {
      n: 31,
      prompt: "<p>A domain user waits ten minutes at signing in, but other users on the same PC sign in normally. The issue follows the user to another PC. What is the most likely fix?</p>",
      choices: ["Replace the monitor", "Disable Secure Boot", "Change the printer driver", "Rebuild or repair the user profile"],
      answer: 3,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>A slow sign-in that follows one user across computers points to a damaged roaming profile, redirected folder issue, or user profile problem, so rebuilding or repairing the profile is appropriate.</p><p>Replace the monitor does not affect authentication. Disable Secure Boot targets boot validation, not one user's profile load. Change the printer driver is unrelated unless printing specifically triggers the delay.</p>"
    },
    {
      n: 32,
      prompt: "<p>A clinic support team is documenting how to protect patient records, credit card numbers, and EU customer data. Which terms match these data categories?</p>",
      choices: ["DRM, EULA, and open source", "PHI, PCI, and GDPR", "AUP, SOP, and MSDS", "RDP, SSH, and VNC"],
      answer: 1,
      topic: "Operational Procedures",
      objective: "4.5",
      difficulty: "hard",
      explanation: "<p>PHI applies to protected health information, PCI applies to payment card data, and GDPR applies to personal data protected under the EU privacy regulation.</p><p>DRM, EULA, and open source are licensing concepts. AUP, SOP, and MSDS are policy or safety documents. RDP, SSH, and VNC are remote access technologies.</p>"
    },
    {
      n: 33,
      prompt: "<p>A user can reach a server by IP address but not by name. Which command should the technician run first to clear the local DNS resolver cache?</p>",
      choices: ["ipconfig /release", "netstat -ano", "ipconfig /flushdns", "tracert"],
      answer: 2,
      topic: "Operating Systems",
      objective: "1.3",
      difficulty: "medium",
      explanation: "<p><code>ipconfig /flushdns</code> clears cached DNS records on the local Windows client and is a quick first step for stale name-resolution entries.</p><p><code>ipconfig /release</code> gives up the DHCP lease. <code>netstat -ano</code> shows network connections and process IDs. <code>tracert</code> traces route hops but does not clear DNS cache.</p>"
    },
    {
      n: 34,
      prompt: "<p>An attacker calls the help desk pretending to be the CFO and demands an urgent password reset for the CEO account. What type of social engineering is this?</p>",
      choices: ["Vishing with impersonation", "Dumpster diving", "Evil twin", "SQL injection"],
      answer: 0,
      topic: "Security",
      objective: "2.5",
      difficulty: "easy",
      explanation: "<p>A phone-based social engineering call is vishing, and pretending to be an executive is impersonation.</p><p>Dumpster diving searches discarded material. Evil twin is a rogue wireless network posing as a legitimate one. SQL injection targets application input and databases, not a help desk phone call.</p>"
    },
    {
      n: 35,
      prompt: "<p>After a graphics driver update, a workstation becomes unstable and randomly restarts during normal use. Which action should be tried before reimaging?</p>",
      choices: ["Low-level format the drive", "Disable the user account", "Replace the keyboard", "Roll back the graphics driver"],
      answer: 3,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>Because instability began after a graphics driver update, rolling back that driver is a targeted and reversible fix to test before destructive recovery.</p><p>Low-level format is unnecessary and destructive. Disable the user account does not address a driver fault. Replace the keyboard is unrelated to restart instability.</p>"
    },
    {
      n: 36,
      prompt: "<p>A technician downloads a script from an internal forum to collect logs. Before running it, what is the most important security step?</p>",
      choices: ["Rename it from .ps1 to .bat", "Review the script contents and run it with the least privileges needed", "Disable antivirus permanently", "Email it to all users"],
      answer: 1,
      topic: "Operational Procedures",
      objective: "4.7",
      difficulty: "hard",
      explanation: "<p>Scripts such as <code>.ps1</code>, <code>.bat</code>, <code>.vbs</code>, <code>.sh</code>, <code>.py</code>, and <code>.js</code> can change systems, so they should be reviewed and run with only required privileges.</p><p>Renaming the extension does not make code safe. Disabling antivirus permanently increases risk. Emailing it to all users spreads unverified automation.</p>"
    },
    {
      n: 37,
      prompt: "<p>A Mac user wants encrypted full-disk protection for the internal storage. Which macOS feature should be enabled?</p>",
      choices: ["FileVault", "Mission Control", "Spotlight", "Time Machine"],
      answer: 0,
      topic: "Operating Systems",
      objective: "1.7",
      difficulty: "medium",
      explanation: "<p>FileVault provides full-disk encryption for supported macOS startup volumes and protects data if the Mac is lost or stolen.</p><p>Mission Control manages windows and desktops. Spotlight searches files and apps. Time Machine creates backups but does not encrypt the internal disk by itself.</p>"
    },
    {
      n: 38,
      prompt: "<p>A shared kiosk must be hardened before being placed in a lobby. Which setting best reduces unauthorized interactive use?</p>",
      choices: ["Enable AutoRun for all removable media", "Use the default administrator password", "Disable the Guest account and configure screen lock", "Turn off failed-attempt lockout"],
      answer: 2,
      topic: "Security",
      objective: "2.7",
      difficulty: "easy",
      explanation: "<p>Disabling Guest and enforcing screen lock reduce casual unauthorized access and are common workstation hardening controls.</p><p>Enable AutoRun increases removable-media risk. Use the default administrator password leaves a known credential. Turn off failed-attempt lockout makes brute-force attempts easier.</p>"
    },
    {
      n: 39,
      prompt: "<p>A workstation's clock drifts by several minutes each day, causing authentication failures with domain resources. What should be checked first?</p>",
      choices: ["Printer share permissions", "Time synchronization settings and CMOS battery condition", "Browser pop-up blocker", "File Explorer hidden file settings"],
      answer: 1,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>Time drift can break Kerberos authentication, so checking NTP or domain time synchronization and the CMOS battery is a logical first step.</p><p>Printer share permissions affect printing. Browser pop-up blocker affects web windows. File Explorer hidden file settings do not control the system clock.</p>"
    },
    {
      n: 40,
      prompt: "<p>A technician needs encrypted command-line administration of a Linux server across the network. Which remote access method is most appropriate?</p>",
      choices: ["VNC without a password", "RDP exposed directly to the internet", "MSRA invitation", "SSH with key-based authentication"],
      answer: 3,
      topic: "Operational Procedures",
      objective: "4.8",
      difficulty: "hard",
      explanation: "<p>SSH provides encrypted remote shell access and key-based authentication is a strong method for administering Linux servers.</p><p>VNC without a password is insecure and graphical. RDP exposed directly to the internet is risky and is primarily for Windows desktops. MSRA is Microsoft Remote Assistance for assisted Windows support, not Linux command-line administration.</p>"
    },
    {
      n: 41,
      prompt: "<p>A Linux technician wants to find every file under the current directory whose name ends in <code>.log</code>. Which command is best?</p>",
      choices: ["df -h", "chmod 755 .", "ps aux", "find . -name *.log"],
      answer: 3,
      topic: "Operating Systems",
      objective: "1.7",
      difficulty: "medium",
      explanation: "<p><code>find . -name *.log</code> searches from the current directory for files matching the specified name pattern.</p><p><code>df -h</code> shows file system free space. <code>chmod 755 .</code> changes permissions on the current directory. <code>ps aux</code> lists running processes.</p>"
    },
    {
      n: 42,
      prompt: "<p>A company is disposing of failed magnetic hard drives containing regulated data and wants assurance that the media cannot be reused. Which method is best?</p>",
      choices: ["Standard format", "Shredding with a certificate of destruction", "Renaming the volume label", "Moving files to Recycle Bin"],
      answer: 1,
      topic: "Security",
      objective: "2.9",
      difficulty: "easy",
      explanation: "<p>Physical shredding destroys the magnetic drive, and a certificate of destruction documents that the disposal process was completed.</p><p>Standard format may leave recoverable data. Renaming the volume label changes only metadata. Moving files to Recycle Bin does not remove data securely.</p>"
    },
    {
      n: 43,
      prompt: "<p>A PC cannot install OS updates and several system files have unexpected hashes after a suspected infection. Which repair command should be run to check protected Windows files?</p>",
      choices: ["net use", "hostname", "sfc /scannow", "format /q"],
      answer: 2,
      topic: "Software Troubleshooting",
      objective: "3.2",
      difficulty: "medium",
      explanation: "<p><code>sfc /scannow</code> checks protected Windows system files and attempts to repair altered or missing files.</p><p><code>net use</code> manages mapped drives. <code>hostname</code> displays the computer name. <code>format /q</code> quick-formats a volume and would be destructive.</p>"
    },
    {
      n: 44,
      prompt: "<p>An office has brief brownouts that cause desktop PCs to reboot and corrupt open files. Which device should be installed?</p>",
      choices: ["UPS", "Passive cable tester", "Antistatic bag", "Privacy filter"],
      answer: 0,
      topic: "Operational Procedures",
      objective: "4.4",
      difficulty: "hard",
      explanation: "<p>A UPS provides temporary battery power and line conditioning during brownouts and blackouts, allowing systems to keep running or shut down safely.</p><p>A passive cable tester checks cabling. An antistatic bag protects components from ESD during storage. A privacy filter limits viewing angles and does not provide power protection.</p>"
    },
    {
      n: 45,
      prompt: "<p>A technician wants a quick GUI view of CPU, memory, disk, network usage, startup apps, users, and processes on Windows 11. Which tool provides these tabs?</p>",
      choices: ["Registry Editor", "Task Manager", "Disk Cleanup", "Devices and Printers"],
      answer: 1,
      topic: "Operating Systems",
      objective: "1.4",
      difficulty: "medium",
      explanation: "<p>Task Manager includes views for Processes, Performance, App history, Startup apps, Users, Details, and Services, making it a quick performance and process tool.</p><p>Registry Editor modifies configuration data. Disk Cleanup removes unnecessary files. Devices and Printers manages connected devices and printers, not live resource tabs.</p>"
    },
    {
      n: 46,
      prompt: "<p>A technician is hardening a SOHO router after installation. Which action should be performed?</p>",
      choices: ["Leave WPS enabled for convenience", "Keep the default administrator password", "Use TKIP for backward compatibility", "Change default credentials, update firmware, and disable unnecessary services"],
      answer: 3,
      topic: "Security",
      objective: "2.10",
      difficulty: "easy",
      explanation: "<p>Changing default credentials, updating firmware, and disabling unused services reduce common SOHO router attack paths.</p><p>Leave WPS enabled can expose PIN-based attacks. Keep the default administrator password is a known weakness. Use TKIP selects obsolete wireless encryption.</p>"
    },
    {
      n: 47,
      prompt: "<p>A desktop shuts down after ten minutes of heavy CPU use, but it can restart after cooling. Which software troubleshooting step best confirms the likely cause?</p>",
      choices: ["Check system temperatures and event logs for thermal shutdown entries", "Delete the user's documents", "Disable all firewall profiles", "Run nslookup against the default gateway"],
      answer: 0,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>Thermal shutdowns often appear under load and may be confirmed by monitoring temperatures and checking logs for critical power or thermal events.</p><p>Delete the user's documents is destructive and irrelevant. Disable all firewall profiles weakens security. Run nslookup tests DNS resolution, not heat-related shutdowns.</p>"
    },
    {
      n: 48,
      prompt: "<p>A backup plan keeps three copies of data on two media types with one copy stored off-site. What principle is being used?</p>",
      choices: ["Grandfather-father-son only", "Synthetic full only", "3-2-1 backup rule", "Differential-only restore"],
      answer: 2,
      topic: "Operational Procedures",
      objective: "4.2",
      difficulty: "hard",
      explanation: "<p>The 3-2-1 rule keeps three copies, on two different media types, with one copy stored off-site to improve recoverability.</p><p>Grandfather-father-son is a rotation schedule. Synthetic full creates a full backup from previous backups without rereading all source data. Differential-only restore is not a complete backup strategy.</p>"
    },
    {
      n: 49,
      prompt: "<p>A user needs to copy a 7 GB video file to a USB drive that must work with both Windows and macOS. Which file system avoids the FAT32 single-file limit?</p>",
      choices: ["FAT32", "ext4", "exFAT", "CDFS"],
      answer: 2,
      topic: "Operating Systems",
      objective: "1.4",
      difficulty: "medium",
      explanation: "<p>exFAT is widely supported by Windows and macOS and supports files larger than the FAT32 4 GB single-file limit.</p><p>FAT32 is the trap because it has a 4 GB maximum single-file size. ext4 is common on Linux but not natively ideal for Windows and macOS interchange. CDFS is for optical disc file systems.</p>"
    },
    {
      n: 50,
      prompt: "<p>A browser warns that a banking site's certificate is invalid after the user installed an unknown extension. What should the technician do first?</p>",
      choices: ["Stop using the site, verify the URL and certificate, and remove suspicious extensions", "Ignore the warning and add a certificate exception", "Disable the pop-up blocker only", "Switch to private browsing and continue"],
      answer: 0,
      topic: "Security",
      objective: "2.11",
      difficulty: "easy",
      explanation: "<p>Certificate warnings can indicate interception or spoofing, so the safe response is to stop, verify the site and certificate, and remove suspicious extensions.</p><p>Ignoring the warning and adding an exception defeats certificate protection. Disabling the pop-up blocker does not validate the site. Private browsing reduces local history but does not fix a bad certificate or malicious extension.</p>"
    },
    {
      n: 51,
      prompt: "<p>After several USB adapters are connected through an unpowered hub, Windows reports controller resource warnings and devices disconnect randomly. What should be tried first?</p>",
      choices: ["Run gpresult", "Move devices to powered hubs or separate USB controllers", "Change the desktop wallpaper", "Flush the ARP cache"],
      answer: 1,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>USB controller resource warnings can occur when too many devices share bandwidth or power, so moving devices to powered hubs or separate controllers addresses the resource issue.</p><p>Run gpresult reports Group Policy results. Change the desktop wallpaper is unrelated. Flush the ARP cache affects network address resolution, not USB controller limits.</p>"
    },
    {
      n: 52,
      prompt: "<p>A technician must choose the default file system for a new Linux server volume. Which file system is most appropriate from the choices?</p>",
      choices: ["APFS", "NTFS", "FAT32", "ext4"],
      answer: 3,
      topic: "Operating Systems",
      objective: "1.7",
      difficulty: "hard",
      explanation: "<p>ext4 is a common native Linux file system suitable for Linux server volumes.</p><p>APFS is Apple's modern file system. NTFS is native to Windows. FAT32 is broadly compatible but lacks modern permissions and has the 4 GB single-file limit.</p>"
    },
    {
      n: 53,
      prompt: "<p>A technician wants to create a scheduled cleanup task that runs monthly under Windows. Which console is designed for this?</p>",
      choices: ["resmon", "regedit", "perfmon", "taskschd.msc"],
      answer: 3,
      topic: "Operating Systems",
      objective: "1.4",
      difficulty: "medium",
      explanation: "<p><code>taskschd.msc</code> opens Task Scheduler, which creates and manages tasks that run on schedules or triggers.</p><p><code>resmon</code> opens Resource Monitor for live resource details. <code>regedit</code> edits the registry. <code>perfmon</code> opens Performance Monitor for counters and data collector sets.</p>"
    },
    {
      n: 54,
      prompt: "<p>A security audit finds that users can attempt unlimited passwords and that the built-in local Administrator account still has the vendor default password. Which hardening change is best?</p>",
      choices: ["Enable AutoRun", "Configure account lockout and change default administrator credentials", "Disable screen locks", "Allow shared passwords for the help desk"],
      answer: 1,
      topic: "Security",
      objective: "2.7",
      difficulty: "easy",
      explanation: "<p>Account lockout limits repeated guessing, and changing default administrator credentials removes a well-known access path.</p><p>Enable AutoRun increases removable media risk. Disable screen locks weakens unattended workstation protection. Allow shared passwords removes accountability and violates least privilege practices.</p>"
    },
    {
      n: 55,
      prompt: "<p>A new accounting application crashes on launch only on PCs with 4 GB of RAM, while the vendor lists 8 GB as the minimum. What should the technician recommend?</p>",
      choices: ["Upgrade the PCs to meet the application's memory requirement", "Reset the user's password", "Change the SSID", "Run bootrec /fixmbr"],
      answer: 0,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>The PCs do not meet the application's stated minimum memory requirement, so adding RAM or using compliant systems is the correct fix.</p><p>Reset the user's password addresses authentication. Change the SSID affects wireless networking. Run <code>bootrec /fixmbr</code> repairs boot records, not application resource shortages.</p>"
    },
    {
      n: 56,
      prompt: "<p>A web form accepts typed input and returns database errors when a user enters special characters. Which attack should the developer be concerned about first?</p>",
      choices: ["Shoulder surfing", "Dictionary attack", "SQL injection", "Piggybacking"],
      answer: 2,
      topic: "Security",
      objective: "2.5",
      difficulty: "hard",
      explanation: "<p>Unexpected database errors from crafted input suggest SQL injection risk, where input may be interpreted as database commands.</p><p>Shoulder surfing is observing someone enter information. Dictionary attack tries likely passwords. Piggybacking is following an authorized person into a secure area.</p>"
    },
    {
      n: 57,
      prompt: "<p>A user says a new Group Policy setting has not applied. Which command refreshes Group Policy immediately on the workstation?</p>",
      choices: ["winver", "gpupdate /force", "shutdown /r /t 0", "xcopy /s"],
      answer: 1,
      topic: "Operating Systems",
      objective: "1.3",
      difficulty: "medium",
      explanation: "<p><code>gpupdate /force</code> immediately reapplies user and computer Group Policy settings instead of waiting for the normal refresh cycle.</p><p><code>winver</code> shows the Windows version. <code>shutdown /r /t 0</code> restarts the computer but is not a policy refresh command. <code>xcopy /s</code> copies files and folders.</p>"
    },
    {
      n: 58,
      prompt: "<p>A courthouse screening area needs to detect weapons before visitors reach the service desk. Which physical security device is most appropriate?</p>",
      choices: ["Cable lock", "Privacy screen", "Badge printer", "Magnetometer"],
      answer: 3,
      topic: "Security",
      objective: "2.1",
      difficulty: "easy",
      explanation: "<p>A magnetometer detects metal objects such as weapons and is commonly used at controlled entrances.</p><p>A cable lock secures equipment to furniture. A privacy screen limits shoulder surfing. A badge printer creates credentials but does not screen visitors for weapons.</p>"
    },
    {
      n: 59,
      prompt: "<p>A technician must mirror a complex folder tree to a new file server and resume cleanly if the network drops. Which command is better suited than <code>xcopy</code>?</p>",
      choices: ["format", "diskpart", "robocopy", "hostname"],
      answer: 2,
      topic: "Operating Systems",
      objective: "1.3",
      difficulty: "medium",
      explanation: "<p><code>robocopy</code> is more robust than <code>xcopy</code> for large folder trees, retries, mirroring, and resumable file copy operations.</p><p><code>format</code> prepares a volume and can erase data. <code>diskpart</code> manages disks and partitions. <code>hostname</code> displays the computer name.</p>"
    },
    {
      n: 60,
      prompt: "<p>An organization wants centralized authentication for Windows domain users that uses tickets and supports single sign-on to domain resources. Which protocol is used by Active Directory for this purpose?</p>",
      choices: ["Kerberos", "TACACS+", "WPA2", "TKIP"],
      answer: 0,
      topic: "Security",
      objective: "2.2",
      difficulty: "medium",
      explanation: "<p>Kerberos is the ticket-based authentication protocol used by Active Directory domains to support single sign-on to domain resources.</p><p>TACACS+ is typically used for network device administration. WPA2 is a wireless security standard. TKIP is an older wireless encryption protocol and not an AD authentication system.</p>"
    }
  ] } ]
};
