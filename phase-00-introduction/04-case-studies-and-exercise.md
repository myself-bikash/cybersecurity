# Cyberattack Case Studies

## Learning objectives

By the end of this lesson, you should be able to:

- Summarize the five incident examples included in the source.
- Relate each case to a threat category or security concept from this phase.
- Research and document an incident without attempting to reproduce it.

## Source note

The case descriptions below preserve the claims in the PDF. The PDF uses numbered citations, but
does not provide a bibliography that would let readers identify those sources. The claims have not
been independently verified for this conversion. Before publishing a sourced course, provide or
approve references for these case studies; no references are invented here.

## Cases from the source

### WannaCry ransomware (2017)

The PDF says WannaCry exploited a vulnerability in Microsoft's Server Message Block (SMB)
protocol. It describes EternalBlue as the exploit, says the malware spread between networked
computers without user interaction, and says it encrypted files and demanded Bitcoin. The source
also attributes EternalBlue's development to the NSA and its leak to the Shadow Brokers.

### Equifax data breach (2017)

The PDF says attackers exploited a known vulnerability in Apache Struts, a web application
framework used by Equifax. It says a patch had been available for months but was not applied, and
that attackers accessed personal data, including Social Security numbers and birth dates, belonging
to more than 147 million people.

### SolarWinds supply-chain attack (2020)

The PDF says attackers compromised SolarWinds' software build system and inserted the “Sunburst”
backdoor into legitimate Orion software updates. It says organizations and US government agencies
that downloaded the updates were exposed to access to their internal networks. The PDF attributes
the operation to Russian state-sponsored hackers.

### Target retail breach (2013)

The PDF says attackers sent a phishing email to an HVAC vendor that worked with Target, then used
the vendor's stolen credentials to access a Target vendor billing portal. It says the attackers moved
laterally into Target's corporate network and installed malware on point-of-sale systems. The source
states that 40 million credit card numbers were stolen.

### NotPetya (2017)

The PDF describes NotPetya as destructive wiper malware disguised as ransomware. It says it was
distributed through a compromised update for Ukrainian tax-accounting software M.E.Doc, then used
EternalBlue and password-stealing techniques to spread through corporate networks and cause
billions of dollars in damage.

## Comparison

| Case | Main concept emphasized by the source |
| --- | --- |
| WannaCry | Ransomware and rapid network propagation |
| Equifax | Exploitation of a known vulnerability and delayed patching |
| SolarWinds | Software supply-chain compromise |
| Target | Third-party credentials and lateral movement |
| NotPetya | Destructive malware distributed through a compromised software update |

These are labels for study, not proof that each case has only one relevant security lesson.

## Practical exercise: research five real cyberattacks

This preserves the source's task: research five real cyberattacks and explain how they happened.
Use the five cases above, or other cases approved by your instructor.

For each case:

1. Find reliable, identifiable sources and record their titles, publishers, and dates.
2. Summarize the incident in your own words.
3. Identify the threat category and security concepts involved.
4. Separate confirmed facts from claims or unanswered questions.
5. Explain what defensive lesson the incident illustrates.

Do not reproduce an exploit, contact affected systems, or test a third party. The source's existing
citations are incomplete; add references only after they have been independently identified and
approved.

**Deliverable:** Five incident summaries, each with a verified source citation, one threat concept,
one defensive lesson, and a note distinguishing confirmed facts from claims.

## Key takeaways

- The source uses these incidents to illustrate ransomware, patching, supply-chain compromise,
  third-party access, lateral movement, and destructive malware.
- Case studies should distinguish evidence-backed facts from claims and interpretations.
- The PDF's numbered citations cannot be resolved from the document because its bibliography is
  missing.

## Revision questions

1. Which case does the source use to illustrate a software supply-chain attack?
2. Which case does it associate with a vulnerability in Apache Struts?
3. What third-party access path does the source describe in the Target case?
4. How does the source distinguish NotPetya from ransomware?
5. Why should a case-study report identify and verify its references?

## Answer key

1. SolarWinds.
2. Equifax.
3. The source describes stolen credentials from an HVAC vendor being used to access a Target vendor
   billing portal, followed by movement into Target's network.
4. The source calls NotPetya a destructive wiper disguised as ransomware, rather than malware whose
   primary purpose is to collect a ransom.
5. Identifiable, checked references let readers verify claims and distinguish evidence from
   interpretation.
