window.AP_DATA = window.AP_DATA || {};

window.AP_DATA.exam6 = {
  id: "exam6",
  name: "Core 2 (220-1102) \u2014 Practice Exam 2",
  timeMinutes: 60,
  units: [ { title: "", html: "", questions: [
    {
      n: 1,
      prompt: "<p>A Windows laptop has 6 TB of unallocated space on a new internal drive. The technician must create one bootable Windows volume that uses the entire drive and supports Secure Boot. Which partition style is BEST?</p>",
      choices: ["MBR, because it is compatible with the widest range of boot loaders", "MBR with four primary partitions and an extended partition", "GPT initialized for UEFI boot", "Dynamic disk initialized after Windows Setup completes"],
      answer: 2,
      topic: "Operating Systems",
      objective: "1.3",
      difficulty: "hard",
      explanation: "<p>GPT with UEFI is the correct choice because MBR cannot address a single 6 TB boot volume and Secure Boot is a UEFI feature.</p><p>MBR compatibility is a trap because it is limited to about 2 TB per disk. MBR with extended partitions still does not solve booting a 6 TB Windows volume. Dynamic disk is not the partition style Windows Setup needs for this requirement.</p>"
    },
    {
      n: 2,
      prompt: "<p>A user connects to a shared folder over the network. The share permission is Change for the Sales group, but the NTFS permission on the folder is Read for the same group. What effective access does the user have over the network?</p>",
      choices: ["Read only", "Change", "Full Control", "No access because the permissions conflict"],
      answer: 0,
      topic: "Security",
      objective: "2.6",
      difficulty: "medium",
      explanation: "<p>Read only is correct because when share and NTFS permissions both apply over the network, the most restrictive effective permission wins.</p><p>Change is a trap because the share allows it but NTFS does not. Full Control is not granted by either path. No access is wrong because permissions do not cancel each other; they combine to the most restrictive allowed access.</p>"
    },
    {
      n: 3,
      prompt: "<p>After a storage controller driver update, a workstation displays a BSOD during startup. The technician can reach WinRE. Which option is the BEST next step before considering a repair install?</p>",
      choices: ["Run Disk Cleanup to remove temporary driver packages", "Reimage the workstation immediately", "Disable System Restore to prevent driver rollback", "Boot to Safe Mode and roll back the storage controller driver"],
      answer: 3,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>Booting to Safe Mode and rolling back the driver is best because the symptom began after a driver update and this is less destructive than repair or reimage.</p><p>Disk Cleanup will not undo the active driver. Reimage is a last resort, not the next step. Disabling System Restore is part of malware handling, not a driver rollback plan.</p>"
    },
    {
      n: 4,
      prompt: "<p>A support ticket is being opened for an intermittent application error. Which item is MOST important to include so another technician can reproduce the issue?</p>",
      choices: ["The user's job title", "The exact steps taken before the error appears", "The purchase date of the monitor", "The technician's preferred troubleshooting theory"],
      answer: 1,
      topic: "Operational Procedures",
      objective: "4.1",
      difficulty: "easy",
      explanation: "<p>The exact steps before the error are essential ticket information because they help reproduce and validate the problem.</p><p>The user's job title may help with priority but not reproduction. The monitor purchase date is unrelated to an application error. A preferred theory is less useful than objective symptoms and steps.</p>"
    },
    {
      n: 5,
      prompt: "<p>A small office bought Windows 11 Home laptops. They now need to join an Active Directory domain, receive domain GPOs, and allow one manager's PC to accept inbound Remote Desktop sessions. What is the BEST recommendation?</p>",
      choices: ["Upgrade those systems to Windows Pro or higher", "Enable the Remote Desktop client in Windows Home", "Install gpedit.msc as a downloaded snap-in", "Convert the workgroup to a homegroup"],
      answer: 0,
      topic: "Operating Systems",
      objective: "1.1",
      difficulty: "hard",
      explanation: "<p>Windows Pro or higher is required for domain join, local Group Policy Editor support, and Remote Desktop host capability.</p><p>The Remote Desktop client is not the same as hosting inbound RDP. Downloading gpedit.msc is unsupported and does not add domain join. Homegroup is obsolete and does not provide Active Directory management.</p>"
    },
    {
      n: 6,
      prompt: "<p>A user signs in with a password and then approves a push notification on a registered phone. Which MFA factor category does the phone approval represent?</p>",
      choices: ["Something you know", "Somewhere you are", "Something you are", "Something you have"],
      answer: 3,
      topic: "Security",
      objective: "2.4",
      difficulty: "medium",
      explanation: "<p>The phone approval is something you have because possession of the registered device is being used as the second factor.</p><p>Something you know is the password. Somewhere you are is location-based. Something you are is biometric, such as a fingerprint or face scan.</p>"
    },
    {
      n: 7,
      prompt: "<p>A Windows service that starts the company's time-clock application is stopped. The user reports the app worked yesterday and no updates were installed. What should the technician try FIRST?</p>",
      choices: ["Reimage the computer", "Restart the required service", "Run DISM with RestoreHealth", "Perform a repair install"],
      answer: 1,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>Restarting the required service is the first targeted and least destructive action when the application depends on a stopped service.</p><p>Reimage and repair install are late-stage actions. DISM repairs the Windows component store and is not the first step for a stopped service.</p>"
    },
    {
      n: 8,
      prompt: "<p>A user wants protection from brief power outages long enough to save work and shut down safely. Which device should be installed at the workstation?</p>",
      choices: ["UPS", "Surge suppressor", "Generator transfer switch", "ESD wrist strap"],
      answer: 0,
      topic: "Operational Procedures",
      objective: "4.4",
      difficulty: "easy",
      explanation: "<p>A UPS is correct because it supplies temporary battery power during a blackout or brownout so the computer can shut down safely.</p><p>A surge suppressor only clamps voltage spikes. A generator transfer switch is facility-level equipment, not workstation protection. An ESD wrist strap protects components during service, not against outages.</p>"
    },
    {
      n: 9,
      prompt: "<p>A user must copy a 6 GB video file to a USB drive that will be used by Windows and macOS computers. The current FAT32 format fails during the copy. Which file system should the technician choose?</p>",
      choices: ["NTFS", "FAT32 with a larger allocation unit", "CDFS", "exFAT"],
      answer: 3,
      topic: "Operating Systems",
      objective: "1.3",
      difficulty: "medium",
      explanation: "<p>exFAT is best because it supports files larger than 4 GB and is broadly supported by Windows and macOS for removable media.</p><p>NTFS may have write limitations on some macOS systems without extra software. FAT32 has a 4 GB single-file limit regardless of allocation unit. CDFS is for optical media, not writable USB flash storage.</p>"
    },
    {
      n: 10,
      prompt: "<p>A wireless network uses per-user credentials checked against a central authentication server. The access points forward authentication requests before allowing clients onto the network. Which technology is being used?</p>",
      choices: ["Kerberos for local account validation", "RADIUS with 802.1X", "TACACS+ for Windows logon scripts", "WPA2-Personal with a long PSK"],
      answer: 1,
      topic: "Security",
      objective: "2.3",
      difficulty: "hard",
      explanation: "<p>RADIUS with 802.1X is correct because enterprise Wi-Fi commonly uses an authentication server to validate individual users before network access.</p><p>Kerberos is used heavily for Active Directory authentication but is not the AP-to-authentication-server protocol in this scenario. TACACS+ is more common for network device administration. WPA2-Personal uses a shared passphrase, not per-user credentials.</p>"
    },
    {
      n: 11,
      prompt: "<p>A user can reach websites by IP address but not by name after a DNS server change. Which command should the technician run on the Windows client FIRST?</p>",
      choices: ["ipconfig /renew", "tracert", "ipconfig /flushdns", "gpupdate /force"],
      answer: 2,
      topic: "Operating Systems",
      objective: "1.4",
      difficulty: "medium",
      explanation: "<p>ipconfig /flushdns clears the local resolver cache, which is the correct first action when stale name resolution data is suspected.</p><p>ipconfig /renew requests a DHCP lease and may not clear cached DNS answers. tracert tests path hops rather than local DNS cache. gpupdate /force refreshes Group Policy, not DNS resolver entries.</p>"
    },
    {
      n: 12,
      prompt: "<p>A server uses weekly full backups on Sunday and differential backups Monday through Saturday. The server fails Thursday afternoon. Which backup sets are required to restore to Wednesday night?</p>",
      choices: ["Sunday full and Wednesday differential", "Sunday full and Monday differential only", "Sunday full, Monday differential, Tuesday differential, and Wednesday differential", "Wednesday differential only"],
      answer: 0,
      topic: "Operational Procedures",
      objective: "4.3",
      difficulty: "hard",
      explanation: "<p>With differential backups, the latest differential contains changes since the last full backup, so Sunday full plus Wednesday differential is required.</p><p>Sunday plus Monday is incomplete. Including Monday and Tuesday differentials is the incremental-backup trap; differentials are not chained that way. Wednesday differential alone lacks the baseline full backup.</p>"
    },
    {
      n: 13,
      prompt: "<p>A technician is assigning permissions for a temporary intern. Which practice BEST follows least privilege?</p>",
      choices: ["Add the intern to Domain Admins and remove access later", "Give access only to the specific folders and apps needed for assigned tasks", "Share the supervisor's account for the first week", "Disable UAC to avoid access prompts"],
      answer: 1,
      topic: "Security",
      objective: "2.1",
      difficulty: "easy",
      explanation: "<p>Least privilege means granting only the permissions required to perform assigned duties and no more.</p><p>Domain Admins gives excessive rights. Sharing an account removes accountability. Disabling UAC weakens local security and does not implement proper authorization.</p>"
    },
    {
      n: 14,
      prompt: "<p>A company needs a documented change to a line-of-business application. Which item must be included before approval so the team can restore service if the change fails?</p>",
      choices: ["An unrelated training plan", "A public marketing notice", "A rollback plan", "A list of preferred vendors only"],
      answer: 2,
      topic: "Operational Procedures",
      objective: "4.2",
      difficulty: "medium",
      explanation: "<p>A rollback plan is required because approved changes need a defined way to return to the prior working state if implementation fails.</p><p>An unrelated training plan does not restore service. A public marketing notice may be irrelevant. A vendor list alone does not describe how to back out the change.</p>"
    },
    {
      n: 15,
      prompt: "<p>A laptop shows No bootable device after a failed update. The disk is visible in firmware and the Windows partition exists. Which WinRE command should be used to repair boot records and boot configuration data?</p>",
      choices: ["sfc /scannow", "robocopy /mir", "net use", "bootrec /rebuildbcd"],
      answer: 3,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>bootrec /rebuildbcd is appropriate in WinRE when Windows exists but boot configuration data must be rebuilt.</p><p>sfc /scannow checks protected system files but does not rebuild BCD. robocopy /mir copies file trees and can be destructive if aimed incorrectly. net use maps network resources, not boot records.</p>"
    },
    {
      n: 16,
      prompt: "<p>During PC service, a technician sees smoke from a desktop power supply and a small electrical fire starts. What should the technician do FIRST?</p>",
      choices: ["Spray the system with water", "Open the power supply case", "Move the computer to a carpeted area", "Remove power if it is safe to do so, then use a Class C extinguisher"],
      answer: 3,
      topic: "Operational Procedures",
      objective: "4.4",
      difficulty: "hard",
      explanation: "<p>Removing power first if safe and using a Class C extinguisher is correct for energized electrical equipment.</p><p>Water can conduct electricity and worsen the hazard. Opening a power supply is dangerous because capacitors can retain charge. Moving the system delays the proper safety response and may spread the hazard.</p>"
    },
    {
      n: 17,
      prompt: "<p>A Windows technician wants to see a timeline of application crashes, failed updates, and stability changes for a user's PC over the past two weeks. Which tool is BEST?</p>",
      choices: ["Resource Monitor", "Performance Monitor", "Reliability Monitor", "Task Scheduler"],
      answer: 2,
      topic: "Operating Systems",
      objective: "1.9",
      difficulty: "medium",
      explanation: "<p>Reliability Monitor is best because it presents a date-based stability timeline with crashes, update failures, and warnings.</p><p>Resource Monitor shows live resource usage. Performance Monitor collects counters and logs but is less direct for a crash timeline. Task Scheduler manages scheduled tasks, not reliability history.</p>"
    },
    {
      n: 18,
      prompt: "<p>A laptop stores confidential files and the owner wants full-volume encryption that unlocks with hardware-backed keys before Windows starts. Which technology is BEST?</p>",
      choices: ["BitLocker", "EFS", "BitLocker To Go", "WPA3"],
      answer: 0,
      topic: "Security",
      objective: "2.7",
      difficulty: "easy",
      explanation: "<p>BitLocker is correct for full-volume Windows drive encryption, commonly backed by a TPM for preboot protection.</p><p>EFS encrypts individual files after sign-in. BitLocker To Go protects removable drives. WPA3 secures wireless networks, not local storage.</p>"
    },
    {
      n: 19,
      prompt: "<p>A user reports that a mobile app opens but displays stale data and crashes when switching tabs. Other apps work normally. What should the technician try FIRST?</p>",
      choices: ["Factory reset the phone", "Force stop the app and clear its cache", "Replace the SIM card", "Disable all device security"],
      answer: 1,
      topic: "Software Troubleshooting",
      objective: "3.3",
      difficulty: "medium",
      explanation: "<p>Force stopping the app and clearing cache is the first app-focused, low-impact step for stale data and app crashes.</p><p>Factory reset is a last resort. Replacing the SIM does not address an isolated app cache problem. Disabling security is risky and unrelated.</p>"
    },
    {
      n: 20,
      prompt: "<p>A supervisor finds suspected prohibited content on a company laptop during a repair. What should the technician do FIRST?</p>",
      choices: ["Open the files to confirm every detail", "Delete the files to protect the company", "Post a warning to the user", "Stop work and report through the required chain of custody procedure"],
      answer: 3,
      topic: "Operational Procedures",
      objective: "4.5",
      difficulty: "medium",
      explanation: "<p>The technician should stop work and follow reporting and chain of custody procedures to preserve evidence and avoid mishandling.</p><p>Opening files can contaminate evidence and expose the technician to content. Deleting files destroys evidence. Warning the user could compromise an investigation.</p>"
    },
    {
      n: 21,
      prompt: "<p>A Windows 10 Pro computer will not boot after system file corruption. The technician can open an elevated command prompt in WinRE. Which repair order follows best practice before using System Restore?</p>",
      choices: ["Run sfc first, then DISM if corruption remains", "Run robocopy first, then chkdsk /r on every volume", "Run gpresult first, then gpupdate /force", "Run pathping first, then tracert"],
      answer: 0,
      topic: "Operating Systems",
      objective: "1.4",
      difficulty: "hard",
      explanation: "<p>sfc checks and repairs protected system files, and DISM repairs the component store when SFC cannot complete or cannot fix corruption.</p><p>robocopy and chkdsk are file copy and disk checks, not the standard system file escalation pair. gpresult and gpupdate are Group Policy tools. pathping and tracert diagnose network routes.</p>"
    },
    {
      n: 22,
      prompt: "<p>A malware removal process is underway. The technician has identified and quarantined the infected system and disabled System Restore. What is the NEXT step in the standard removal process?</p>",
      choices: ["Schedule scans and run updates", "Educate the end user", "Remediate the infected system", "Enable System Restore"],
      answer: 2,
      topic: "Security",
      objective: "2.5",
      difficulty: "hard",
      explanation: "<p>After identifying, quarantining, and disabling System Restore, the next step is remediation, such as removing malware and correcting changes.</p><p>Scheduling scans and updates comes after remediation. User education is later in the process. Enabling System Restore occurs after the system is cleaned and protected.</p>"
    },
    {
      n: 23,
      prompt: "<p>A Windows PC becomes very slow when a user signs in, but after five minutes performance returns to normal. The same account signs in slowly on several PCs. Which area should be investigated FIRST?</p>",
      choices: ["The CPU fan speed", "The local monitor driver", "The BIOS boot order", "Logon scripts, folder redirection, and roaming profile size"],
      answer: 3,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>Because the same account is slow across several PCs, domain logon items such as scripts, folder redirection, and profile size are the likely first area.</p><p>CPU fan speed and monitor drivers would not follow the user across machines. BIOS boot order affects startup before sign-in, not a user-specific profile load.</p>"
    },
    {
      n: 24,
      prompt: "<p>A company records laptops by serial number, assigned user, location, warranty status, and disposal date. Which process does this support?</p>",
      choices: ["Change freeze enforcement", "Asset management", "Chain of custody only", "Password rotation"],
      answer: 1,
      topic: "Operational Procedures",
      objective: "4.1",
      difficulty: "easy",
      explanation: "<p>Asset management tracks hardware ownership, location, lifecycle, warranty, and disposal information.</p><p>Change freeze enforcement controls when changes occur. Chain of custody is evidence handling, not normal lifecycle tracking. Password rotation is an account security practice.</p>"
    },
    {
      n: 25,
      prompt: "<p>A user needs the same drive letter for a department share each time they sign in. The technician wants to create it from the command line and make it persistent. Which command family is appropriate?</p>",
      choices: ["diskpart clean", "chkdsk /f", "net use", "format /fs:ntfs"],
      answer: 2,
      topic: "Operating Systems",
      objective: "1.4",
      difficulty: "medium",
      explanation: "<p>net use is used to map network drives and can make mappings persistent for future sign-ins.</p><p>diskpart clean removes partition information. chkdsk /f repairs file system errors. format /fs:ntfs formats a volume and would destroy data.</p>"
    },
    {
      n: 26,
      prompt: "<p>A user copies an encrypted EFS file from an NTFS folder to a FAT32 USB drive. What happens to the file's encryption?</p>",
      choices: ["It stays encrypted because EFS follows the user certificate to all file systems", "It becomes BitLocker To Go encrypted automatically", "It is blocked unless the user is a local administrator", "It loses EFS encryption on the FAT32 destination"],
      answer: 3,
      topic: "Security",
      objective: "2.7",
      difficulty: "hard",
      explanation: "<p>EFS requires NTFS, so copying the file to a FAT32 destination removes EFS encryption on the copy.</p><p>EFS does not persist to all file systems. BitLocker To Go is separate removable-drive encryption and is not automatic. Local administrator rights do not make FAT32 support EFS.</p>"
    },
    {
      n: 27,
      prompt: "<p>A user reports browser pop-ups, changed search results, and a new toolbar after installing a coupon program. What type of malware or unwanted software is MOST likely?</p>",
      choices: ["Rootkit", "Adware", "Ransomware", "Boot sector virus"],
      answer: 1,
      topic: "Software Troubleshooting",
      objective: "3.2",
      difficulty: "medium",
      explanation: "<p>Adware is most likely because the symptoms are pop-ups, browser redirection, and unwanted advertising components.</p><p>A rootkit hides privileged access. Ransomware encrypts or locks data for payment. A boot sector virus targets boot code rather than adding toolbars and ads.</p>"
    },
    {
      n: 28,
      prompt: "<p>A backup plan keeps monthly backups for years, weekly backups for several months, and daily backups for recent restore points. What rotation scheme is this describing?</p>",
      choices: ["3-2-1", "Tower of Hanoi", "Grandfather-father-son", "First in, first out only"],
      answer: 2,
      topic: "Operational Procedures",
      objective: "4.3",
      difficulty: "hard",
      explanation: "<p>Grandfather-father-son uses longer-retention monthly, medium-retention weekly, and short-retention daily backups.</p><p>3-2-1 describes copies, media types, and offsite storage, not retention generations. Tower of Hanoi is a different rotation pattern. FIFO only describes removing the oldest items, not monthly-weekly-daily generations.</p>"
    },
    {
      n: 29,
      prompt: "<p>A Windows 11 deployment fails on several older PCs. The installer reports that required security hardware is missing. Which requirements should the technician verify FIRST?</p>",
      choices: ["DirectX 9 and BIOS password", "TPM 2.0, UEFI, and Secure Boot support", "FAT32 system partition and MBR", "Local Administrator renamed and guest account enabled"],
      answer: 1,
      topic: "Operating Systems",
      objective: "1.2",
      difficulty: "medium",
      explanation: "<p>Windows 11 requires TPM 2.0 and supports Secure Boot with UEFI, so those are the first items to verify.</p><p>DirectX 9 and BIOS password do not satisfy Windows 11 security requirements. FAT32 with MBR is not the target modern boot configuration. Renaming accounts does not meet installation hardware requirements.</p>"
    },
    {
      n: 30,
      prompt: "<p>The CEO receives a personalized email that appears to be from the CFO and requests an urgent wire transfer. What attack type is BEST described?</p>",
      choices: ["Smishing", "Vishing", "Dictionary attack", "Whaling"],
      answer: 3,
      topic: "Security",
      objective: "2.5",
      difficulty: "medium",
      explanation: "<p>Whaling is targeted phishing aimed at high-value executives such as a CEO, often using business context to create urgency.</p><p>Smishing uses SMS text messages. Vishing uses voice calls. A dictionary attack tries likely passwords and is not a social-engineering email.</p>"
    },
    {
      n: 31,
      prompt: "<p>A PC reports that a USB controller does not have enough resources available after a docking station is connected. What should the technician do before reinstalling Windows?</p>",
      choices: ["Check Device Manager for resource conflicts and update the chipset or USB controller drivers", "Convert the disk from GPT to MBR", "Disable Windows Firewall", "Run gpupdate /force"],
      answer: 0,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "hard",
      explanation: "<p>Device Manager and updated chipset or USB controller drivers directly address USB resource conflicts with minimal impact.</p><p>Converting GPT to MBR is unrelated and destructive. Windows Firewall does not allocate USB controller resources. gpupdate /force refreshes policy and does not fix hardware resource warnings.</p>"
    },
    {
      n: 32,
      prompt: "<p>A legacy accounting application opens with tiny controls and then crashes only after a Windows feature update. The vendor documentation says the app requires older Windows compatibility settings. What should the technician try NEXT?</p>",
      choices: ["Reimage the computer", "Disable Windows Firewall", "Replace the monitor", "Run the Program Compatibility Troubleshooter or set compatibility options for the app"],
      answer: 3,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>Using the Program Compatibility Troubleshooter or compatibility options is the targeted next step when a legacy app fails after a Windows feature update.</p><p>Reimaging is too destructive. Disabling Windows Firewall does not address app compatibility. Replacing the monitor does not fix a software crash after an OS update.</p>"
    },
    {
      n: 33,
      prompt: "<p>Which Linux command sets a script so the owner can read, write, and execute it, while group and others can only read and execute it?</p>",
      choices: ["chmod 755 script.sh", "chmod 644 script.sh", "chmod 600 script.sh", "chmod 777 script.sh"],
      answer: 0,
      topic: "Operating Systems",
      objective: "1.11",
      difficulty: "easy",
      explanation: "<p>chmod 755 gives the owner rwx and group and others r-x, which matches the requirement for an executable script.</p><p>chmod 644 does not grant execute. chmod 600 allows only owner read and write. chmod 777 grants write access to everyone and is overly permissive.</p>"
    },
    {
      n: 34,
      prompt: "<p>A company wants to prevent unauthorized laptops from connecting to wired switch ports unless the user or device authenticates first. Which control BEST fits?</p>",
      choices: ["MAC filtering only", "802.1X network access control", "Hidden SSID", "TKIP encryption"],
      answer: 1,
      topic: "Security",
      objective: "2.3",
      difficulty: "hard",
      explanation: "<p>802.1X provides port-based network access control and can require authentication before allowing access to wired or wireless networks.</p><p>MAC filtering is easily bypassed and weak by itself. Hidden SSID applies to Wi-Fi discovery, not wired switch ports. TKIP is an older wireless encryption protocol and does not authenticate wired endpoints.</p>"
    },
    {
      n: 35,
      prompt: "<p>A Windows PC's clock drifts by several minutes each day, causing authentication failures to domain resources. What should be checked FIRST?</p>",
      choices: ["The screen saver timeout", "The user's default browser", "The time synchronization service and configured time source", "The printer spooler queue"],
      answer: 2,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>Time synchronization and the configured time source are the correct first checks because time drift can break domain authentication.</p><p>Screen saver timeout and default browser do not control system time. The printer spooler affects printing, not Kerberos time skew.</p>"
    },
    {
      n: 36,
      prompt: "<p>A technician is unpacking memory modules at a workbench. Which practice BEST reduces ESD risk?</p>",
      choices: ["Work on carpet to cushion parts", "Keep the room as dry as possible", "Use an antistatic wrist strap connected to ground", "Handle modules by the gold contacts"],
      answer: 2,
      topic: "Operational Procedures",
      objective: "4.4",
      difficulty: "medium",
      explanation: "<p>An antistatic wrist strap connected to ground helps equalize electrical potential and reduce ESD damage during component handling.</p><p>Carpet and very dry air increase static risk. Handling gold contacts can contaminate or damage the module.</p>"
    },
    {
      n: 37,
      prompt: "<p>A technician needs to create a virtual lab running multiple 64-bit Windows guests on a Windows workstation. Which Windows edition feature is required on the host?</p>",
      choices: ["Hyper-V support available in Pro, Enterprise, or Education editions", "Windows Home single-language mode", "NTFS compression", "Remote Desktop client"],
      answer: 0,
      topic: "Operating Systems",
      objective: "1.7",
      difficulty: "medium",
      explanation: "<p>Hyper-V host support requires a capable CPU and appropriate Windows editions such as Pro, Enterprise, or Education.</p><p>Windows Home does not include Hyper-V host capability. NTFS compression is a file-system feature, not virtualization. Remote Desktop client connects to other systems and does not create virtual machines.</p>"
    },
    {
      n: 38,
      prompt: "<p>A branch office must sanitize failed SSDs that contained regulated data. The drives cannot be powered on reliably and must not be reused. Which destruction method BEST meets the requirement?</p>",
      choices: ["Quick format", "Degaussing only", "Shredding or physical destruction by an approved provider", "Deleting the user profiles"],
      answer: 2,
      topic: "Security",
      objective: "2.8",
      difficulty: "hard",
      explanation: "<p>Physical destruction such as shredding is best because the SSDs cannot be reliably powered for secure erase and will not be reused.</p><p>Quick format and deleting profiles leave recoverable data. Degaussing is not reliable for flash media like SSDs and does not meet this reuse-not-required scenario as well as destruction.</p>"
    },
    {
      n: 39,
      prompt: "<p>A smartphone is lost and contains company email. The device is enrolled in MDM and has not checked in since yesterday. What is the BEST response?</p>",
      choices: ["Wait for the user to find it", "Post the phone number online", "Disable the user's entire domain account permanently", "Use MDM to lock or wipe the device according to policy"],
      answer: 3,
      topic: "Software Troubleshooting",
      objective: "3.4",
      difficulty: "medium",
      explanation: "<p>Using MDM to lock or wipe the device is the appropriate response to protect company data on a lost managed mobile device.</p><p>Waiting leaves data exposed. Posting the number creates privacy risk. Permanently disabling the domain account is excessive and does not remove cached mobile data.</p>"
    },
    {
      n: 40,
      prompt: "<p>A user is upset because a repair took longer than expected. Which response is BEST?</p>",
      choices: ["Tell the user they caused the delay", "Ignore the complaint and close the ticket", "Use jargon to prove the repair was complicated", "Listen, acknowledge the frustration, and provide a clear status update"],
      answer: 3,
      topic: "Operational Procedures",
      objective: "4.7",
      difficulty: "easy",
      explanation: "<p>Listening, acknowledging the concern, and giving a clear update demonstrates professionalism and helps de-escalate the situation.</p><p>Blaming the user escalates conflict. Ignoring the complaint fails customer service. Using jargon may confuse or frustrate the user further.</p>"
    },
    {
      n: 41,
      prompt: "<p>A remote employee can connect to the internet but cannot reach internal file shares until launching a secure tunnel client. Which Windows setting area is MOST relevant to configure this connection?</p>",
      choices: ["Printers and scanners", "VPN settings", "Color management", "Storage Spaces"],
      answer: 1,
      topic: "Operating Systems",
      objective: "1.6",
      difficulty: "medium",
      explanation: "<p>VPN settings are used to configure secure tunnel connections to internal resources over the internet.</p><p>Printers and scanners, color management, and Storage Spaces do not establish private network tunnels for file share access.</p>"
    },
    {
      n: 42,
      prompt: "<p>A browser warns that a banking site's certificate name does not match the site being visited. What should the user do?</p>",
      choices: ["Stop using the site and report the warning through support procedures", "Add a permanent exception immediately", "Disable certificate checking", "Enter credentials only if the page looks normal"],
      answer: 0,
      topic: "Security",
      objective: "2.9",
      difficulty: "medium",
      explanation: "<p>A certificate name mismatch can indicate spoofing or an on-path attack, so the safe action is to stop and report it.</p><p>Adding an exception or disabling checks bypasses an important security control. A normal-looking page is not trustworthy when certificate validation fails.</p>"
    },
    {
      n: 43,
      prompt: "<p>A Windows computer is slow only while a large report is being generated. The technician wants to see live per-process disk, CPU, memory, and network usage to identify the bottleneck. Which tool is BEST?</p>",
      choices: ["Event Viewer", "Reliability Monitor", "Resource Monitor", "Local Security Policy"],
      answer: 2,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "hard",
      explanation: "<p>Resource Monitor is best for live per-process resource usage across CPU, memory, disk, and network.</p><p>Event Viewer records logs but is not the best live bottleneck view. Reliability Monitor shows stability history. Local Security Policy configures security settings rather than performance usage.</p>"
    },
    {
      n: 44,
      prompt: "<p>A technician downloads a PowerShell script from a vendor forum to fix a registry issue. What should the technician do FIRST to reduce script risk?</p>",
      choices: ["Run it as administrator so it can complete", "Rename it from .ps1 to .bat", "Disable antivirus temporarily", "Review the script source and test it in a controlled environment"],
      answer: 3,
      topic: "Operational Procedures",
      objective: "4.8",
      difficulty: "hard",
      explanation: "<p>Reviewing the source and testing in a controlled environment reduces the risk of unintended or malicious script actions.</p><p>Running as administrator increases potential damage. Renaming the extension does not make it safe. Disabling antivirus removes a protective control.</p>"
    },
    {
      n: 45,
      prompt: "<p>A macOS user needs to force quit a frozen application and review running processes. Which built-in utility should be opened?</p>",
      choices: ["Activity Monitor", "Disk Utility", "Keychain Access", "Boot Camp Assistant"],
      answer: 0,
      topic: "Operating Systems",
      objective: "1.10",
      difficulty: "easy",
      explanation: "<p>Activity Monitor displays processes and resource usage and can be used to quit an unresponsive application.</p><p>Disk Utility manages disks and volumes. Keychain Access stores credentials and certificates. Boot Camp Assistant assists with installing Windows on supported Intel Macs.</p>"
    },
    {
      n: 46,
      prompt: "<p>A user copies a confidential folder from one NTFS volume to another NTFS volume. How are the permissions on the copied folder determined by default?</p>",
      choices: ["The copied folder keeps the original explicit permissions in all cases", "The copied folder inherits permissions from the destination", "All permissions are removed", "Share permissions become NTFS permissions"],
      answer: 1,
      topic: "Security",
      objective: "2.6",
      difficulty: "medium",
      explanation: "<p>When copying to a different NTFS location, the new copy typically inherits permissions from the destination folder.</p><p>Keeping original permissions is the common trap for moves within the same volume, not copies to another location. Permissions are not all removed. Share permissions do not convert into NTFS permissions.</p>"
    },
    {
      n: 47,
      prompt: "<p>A workstation shows repeated antivirus alerts for the same file after every reboot. The technician has confirmed malware is present. What should be done FIRST in the malware removal workflow?</p>",
      choices: ["Quarantine the system from the network", "Run System Restore to yesterday", "Educate the user about phishing", "Enable file sharing so tools can be copied"],
      answer: 0,
      topic: "Software Troubleshooting",
      objective: "3.2",
      difficulty: "hard",
      explanation: "<p>After identifying malware symptoms, the system should be quarantined to prevent spread and communication before remediation.</p><p>System Restore should be disabled before remediation, not run first. User education comes after cleaning and protection. Enabling file sharing can spread the infection.</p>"
    },
    {
      n: 48,
      prompt: "<p>A clinic spreadsheet contains patient names, diagnosis codes, and treatment dates. Which regulated data category is MOST directly involved?</p>",
      choices: ["PCI", "Public domain data", "Source code", "PHI"],
      answer: 3,
      topic: "Operational Procedures",
      objective: "4.6",
      difficulty: "medium",
      explanation: "<p>PHI is correct because the file contains personally identifiable health information tied to care and treatment.</p><p>PCI relates to payment card data. Public domain data is not confidential patient information. Source code is software instructions, not health records.</p>"
    },
    {
      n: 49,
      prompt: "<p>A technician must push a fresh Windows image to bare-metal computers that have no OS installed. The computers are on the same LAN as the deployment server. Which boot method is BEST?</p>",
      choices: ["PXE network boot", "Fast Startup", "Safe Mode", "System Restore"],
      answer: 0,
      topic: "Operating Systems",
      objective: "1.3",
      difficulty: "medium",
      explanation: "<p>PXE network boot is best for starting bare-metal clients from the network to load a deployment environment and image.</p><p>Fast Startup requires an installed Windows OS. Safe Mode starts an existing Windows installation. System Restore rolls back an installed system state and cannot image bare-metal PCs.</p>"
    },
    {
      n: 50,
      prompt: "<p>A company's WPA2 network is being upgraded. Management wants stronger modern wireless security and protection against offline password guessing on a personal passphrase network. Which option is BEST?</p>",
      choices: ["WEP with a hidden SSID", "WPA2 with TKIP", "WPA3-Personal using SAE", "Open network with captive portal"],
      answer: 2,
      topic: "Security",
      objective: "2.3",
      difficulty: "hard",
      explanation: "<p>WPA3-Personal with SAE provides stronger modern personal wireless security and improves resistance to offline password guessing.</p><p>WEP is obsolete and broken. WPA2 with TKIP is weaker and deprecated compared with AES-based options. An open network with a captive portal does not encrypt client traffic at the Wi-Fi layer.</p>"
    },
    {
      n: 51,
      prompt: "<p>A technician must compare packet loss and latency across each hop to a remote service over a period of time. Which command provides more statistical path information than tracert?</p>",
      choices: ["net use", "pathping", "gpresult", "xcopy"],
      answer: 1,
      topic: "Operating Systems",
      objective: "1.4",
      difficulty: "medium",
      explanation: "<p>pathping combines route tracing with statistics about latency and packet loss over time for each hop.</p><p>net use maps network resources. gpresult reports applied Group Policy. xcopy copies files and does not analyze network paths.</p>"
    },
    {
      n: 52,
      prompt: "<p>A user receives a text message claiming to be from payroll with a link to confirm direct deposit details. What social-engineering type is this?</p>",
      choices: ["Whaling", "Smishing", "Tailgating", "Shoulder surfing"],
      answer: 1,
      topic: "Security",
      objective: "2.5",
      difficulty: "easy",
      explanation: "<p>Smishing is phishing performed through SMS or text messages, which matches the payroll text link scenario.</p><p>Whaling targets executives. Tailgating is following someone into a secure area. Shoulder surfing is observing private information over someone's shoulder.</p>"
    },
    {
      n: 53,
      prompt: "<p>After a feature update, a Windows application crashes at launch on every sign-in. A reboot, service restart, and application reinstall did not help. Reliability Monitor points to a Windows DLL fault. What is the NEXT least-destructive step?</p>",
      choices: ["Reimage the computer from the standard image", "Run System Restore immediately", "Run sfc /scannow, then DISM if SFC cannot repair the corruption", "Replace the user's monitor driver"],
      answer: 2,
      topic: "Software Troubleshooting",
      objective: "3.1",
      difficulty: "hard",
      explanation: "<p>Running SFC and then DISM if needed is the next least-destructive escalation when symptoms point to Windows system file or component corruption.</p><p>Reimage is a last resort. System Restore is later in the escalation path than SFC and DISM for repairable corruption. Replacing the monitor driver is unrelated to a DLL fault identified in Reliability Monitor.</p>"
    },
    {
      n: 54,
      prompt: "<p>A technician must copy a large user profile tree, preserve NTFS permissions, resume after interruptions, and mirror deletions to the destination. Which command is BEST?</p>",
      choices: ["xcopy /s", "robocopy with appropriate mirroring and security switches", "copy", "format"],
      answer: 1,
      topic: "Operating Systems",
      objective: "1.4",
      difficulty: "medium",
      explanation: "<p>robocopy is best for robust folder tree copies, restartable transfers, permission preservation, and mirroring when used with the correct switches.</p><p>xcopy is older and less resilient. copy handles simple file copies, not robust profile trees. format prepares a volume and destroys existing data.</p>"
    },
    {
      n: 55,
      prompt: "<p>A contractor needs temporary access to a project share and one application. The access must expire automatically when the contract ends. Which AD approach is BEST?</p>",
      choices: ["Put the contractor account directly in Domain Admins", "Give the contractor the manager's password", "Add the contractor to a project security group with an expiration or scheduled review", "Create a new OU named Contractor Access and move the file server into it"],
      answer: 2,
      topic: "Security",
      objective: "2.1",
      difficulty: "hard",
      explanation: "<p>A project security group with expiration or scheduled review supports least privilege, manageability, and timely removal of temporary access.</p><p>Domain Admins is excessive. Sharing a manager's password destroys accountability. An OU organizes objects for policy and delegation but does not by itself grant controlled access to the share and application.</p>"
    },
    {
      n: 56,
      prompt: "<p>A user's Windows PC has a suspicious process making outbound connections. The user is currently entering customer card numbers into a web form. What should the technician do NEXT?</p>",
      choices: ["Tell the user to continue until the order is finished", "Clear the browser cache only", "Disable all security logs", "Disconnect the PC from the network and preserve details for escalation"],
      answer: 3,
      topic: "Software Troubleshooting",
      objective: "3.2",
      difficulty: "hard",
      explanation: "<p>Disconnecting the PC from the network limits data exposure and preserves the situation for malware or security escalation, especially with card data at risk.</p><p>Continuing the transaction risks PCI data compromise. Clearing cache does not stop active exfiltration. Disabling logs destroys useful investigation evidence.</p>"
    },
    {
      n: 57,
      prompt: "<p>A Linux administrator needs to run one command with elevated privileges while keeping accountability tied to the user's own account. Which command is preferred?</p>",
      choices: ["su", "sudo", "chmod 777", "passwd -d"],
      answer: 1,
      topic: "Operating Systems",
      objective: "1.11",
      difficulty: "easy",
      explanation: "<p>sudo runs a command with elevated privileges while logging the action under the requesting user's account, depending on configuration.</p><p>su switches to another user, often root, and can reduce accountability when shared. chmod 777 changes permissions too broadly. passwd -d removes a password and is not an elevation method.</p>"
    },
    {
      n: 58,
      prompt: "<p>A user connects to a coffee shop Wi-Fi network named the same as the shop's posted SSID, but certificate warnings appear and traffic is being redirected. Which attack is MOST likely?</p>",
      choices: ["Brute force", "Zero-day", "Evil twin", "Logic bomb"],
      answer: 2,
      topic: "Security",
      objective: "2.5",
      difficulty: "medium",
      explanation: "<p>An evil twin is a rogue wireless network using a legitimate-looking SSID to trick users and intercept or redirect traffic.</p><p>Brute force attempts many passwords. Zero-day exploits an unknown vulnerability. A logic bomb triggers malicious code based on conditions and is not a rogue Wi-Fi network.</p>"
    },
    {
      n: 59,
      prompt: "<p>A technician needs to see which Group Policy settings actually applied to a user's computer after sign-in. Which command should be used?</p>",
      choices: ["gpresult", "gpupdate /force", "ipconfig /renew", "diskmgmt.msc"],
      answer: 0,
      topic: "Operating Systems",
      objective: "1.4",
      difficulty: "medium",
      explanation: "<p>gpresult reports the Resultant Set of Policy, showing which policies applied to the user and computer.</p><p>gpupdate /force refreshes policy but does not report what applied. ipconfig /renew renews DHCP configuration. diskmgmt.msc opens Disk Management and is unrelated to Group Policy results.</p>"
    },
    {
      n: 60,
      prompt: "<p>A SOHO router is installed with default settings. The owner wants the most important hardening steps before users connect. Which sequence is BEST?</p>",
      choices: ["Change default admin credentials, update firmware, enable WPA3 or WPA2-AES, and disable WPS", "Disable encryption, enable guest sharing, and keep the default admin password", "Hide the SSID only and leave firmware unchanged", "Forward all ports to the owner's desktop for convenience"],
      answer: 0,
      topic: "Security",
      objective: "2.10",
      difficulty: "hard",
      explanation: "<p>Changing default admin credentials, updating firmware, enabling strong Wi-Fi encryption, and disabling WPS are core SOHO hardening steps before use.</p><p>Disabling encryption and keeping defaults is unsafe. Hiding the SSID alone is weak and does not patch vulnerabilities. Forwarding all ports exposes the desktop unnecessarily.</p>"
    }
  ] } ]
};
