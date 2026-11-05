# Isolated Active Directory Lab and Projects

## Learning objectives

- Design a small isolated AD lab with a server and domain-joined client.
- Create test identities, groups, OUs, and Group Policy in that lab.
- Investigate authentication and configuration using lab-generated evidence.
- Complete defensive projects with clear records and reports.

## 1. Recommended architecture

The PDF's example for a 16 GB laptop starts with two VMs, not multiple analysis systems:

| Machine | Role | Suggested RAM in source |
| --- | --- | --- |
| Windows Server | Domain controller, DNS, and AD DS. | 4 GB. |
| Windows client | Domain-joined workstation. | 3–4 GB. |
| Linux host | Main operating system. | Remaining memory. |

These are source-provided example allocations, not guaranteed requirements. The source says Kali
Linux is not needed for the initial AD lab.

Use an internal or host-only virtual network, not bridged networking to a normal home, school, or
work network. Example lab-only network:

| Component | Example |
| --- | --- |
| Network | `192.168.56.0/24` |
| Windows Server | `192.168.56.10` |
| Windows client | `192.168.56.20` |
| Test domain | `company.test` |

These addresses and names are examples for the isolated lab only.

## 2. Lab setup stages

1. Install a Windows Server VM using a legitimate installation image.
2. Configure a static server address and appropriate DNS settings.
3. Add the AD DS server role.
4. Promote the server to a domain controller and create a test domain.
5. Verify the domain's DNS records and client discovery of the controller.
6. Install a separate Windows client VM on the isolated network.
7. Join the client to the test domain using an authorized domain account.
8. Create ordinary test users, security groups, and OUs.
9. Create and apply a test GPO to a selected OU.
10. Sign in with a test domain user and verify applied policies.

Never connect this lab network to a production environment.

## 3. Projects

### Project 1: Active Directory administration

Create `company.test`, OUs for HR, Finance, and IT, and three test users in each OU. Create
corresponding security groups, add users to the appropriate groups, create a test shared folder,
assign permissions to groups, and verify access using different test accounts.

**Deliverable:** A domain diagram and short explanation of how identities, groups, OUs, and
resource permissions interact.

### Project 2: Group Policy security

Create a GPO for the HR OU, configure an appropriate screen-lock setting, configure password and
account-lockout policies at the correct scope, apply a suitable Windows Firewall policy, review
application with `gpresult`, test on the domain-joined client, and document the result. Pay
attention to the scope of domain password policy and fine-grained password policies.

### Project 3: Authentication investigation

Sign in with a test domain account, generate successful and failed logons, access a test shared
folder, review relevant Windows Security logs, identify Events 4624 and 4625, review Kerberos
events where applicable, and compare ordinary with unusual activity.

**Deliverable:** A short timeline that explains what the evidence establishes and what remains
uncertain.

### Project 4: Active Directory security audit

In your own test domain, review privileged-group membership, unused test accounts, service
accounts, delegation, GPO permissions, DNS configuration, NTLM dependencies, and risky
permissions. Record recommended remediations.

### Project 5: BloodHound relationship analysis

Use your own isolated domain with test identities and deliberately created permission
relationships. Use an authorized collection method or synthetic dataset, import the data into
BloodHound, review groups and potential paths to privileged accounts, validate whether the paths
represent real weaknesses, and recommend changes.

Do not collect directory information from a company, school, or other network without explicit
authorization.

### Project 6: Lateral-movement detection

Use two domain-joined test computers. Generate normal authentication and approved remote
administration activity, collect their Windows Security logs, compare logon patterns, examine
process-creation and service-installation events, create a simple SIEM detection, and write an
investigation report. Do not generate unauthorized remote-access activity.

## Practical exercise: report template

For any project, record:

- Lab scope and authorization.
- Test accounts, systems, and network isolation.
- Objective and steps performed.
- Evidence sources and event identifiers.
- Observations, interpretation, and limitations.
- Recommended defensive changes.

## Key takeaways

- Use only test identities and machines that you own or are authorized to assess.
- Keep the lab on an internal or host-only network.
- Verify policy and permissions through test accounts and recorded evidence.
- Use synthetic data or an owned domain for relationship analysis.
- Explain limitations and separate observations from conclusions.

## Revision questions

1. What two VMs are recommended for the initial lab?
2. Why should the lab use host-only or internal networking?
3. What should the AD administration project demonstrate?
4. Which events are used in the authentication investigation?
5. What authorization boundary applies to BloodHound data collection?
6. What should a defensive investigation report distinguish?
