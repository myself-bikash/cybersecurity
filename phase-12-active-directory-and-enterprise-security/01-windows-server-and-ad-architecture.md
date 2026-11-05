# Windows Server and Active Directory Architecture

## Learning objectives

- Explain the purpose of Windows Server, servers, clients, and client-server architecture.
- Describe the roles of Active Directory, AD DS, and a domain controller.
- Distinguish domains, trees, forests, OUs, objects, and workgroups.
- Explain why enterprises use multiple domain controllers.

## 1. Windows Server and client-server systems

**Windows Server** is a Microsoft operating system designed to provide services and manage
resources for users and computers on a network. Common uses include identity management, file
and printer sharing, authentication, DNS and DHCP, application and database hosting, network
policy, and security administration.

A **server** is a computer or software system that provides a service or resource to **clients**.
In a company, a laptop may request a shared file, a file server provides it, a domain controller
helps authenticate the user, and DNS helps locate the services.
One physical server can host multiple services, although larger enterprises often separate important
roles.

For example, an organization with 500 employees, 300 laptops, 40 servers, and 10 departments
would otherwise need to manage many separate accounts and permissions. Centralized identity
management can simplify that work. In a client-server sign-in, an employee's computer contacts a
domain controller, the controller helps verify the identity, and permissions determine which
company resources the employee may access.

| Windows desktop | Windows Server |
| --- | --- |
| Primarily designed for individual users and desktop applications. | Designed for server workloads and network administration. |
| Commonly manages one user's environment. | Can provide centralized services to many users and computers. |
| Usually used as a workstation. | Commonly used as a server; can host AD DS when configured for that role. |

Important Windows Server roles include Active Directory Domain Services (AD DS), DNS Server,
DHCP Server, File Server, Web Server (IIS), Active Directory Certificate Services (AD CS), and
Remote Desktop Services. Installing Windows Server does not automatically make a computer a
domain controller.

## 2. Active Directory and its objects

**Active Directory (AD)** is Microsoft's directory service for centrally managing users, computers,
groups, and other resources in a Windows domain environment. It supports centralized access
management and security policies.

An **object** is an entry in the directory representing an entity such as a user, computer, group,
printer, or OU. AD manages identities, authentication-related information, groups, OUs, and
domain-related information.

## 3. Hierarchy: domains, trees, and forests

| Component | Meaning |
| --- | --- |
| Domain | Logical administrative boundary containing directory objects managed under common directory data and policies. |
| Tree | One or more domains arranged in a hierarchical, contiguous DNS namespace, such as `company.com` and `sales.company.com`. |
| Forest | The highest-level logical container in a traditional AD environment; may contain multiple trees sharing schema, configuration, and a global catalog. It is an important administrative and security boundary. |
| Organizational Unit (OU) | Directory container used to organize objects and support administration and Group Policy. |
| Object | Individual directory entry, such as a user, computer, group, printer, or OU. |

A domain is not the same as a Windows workgroup. A workgroup does not provide the same
centralized directory and authentication architecture. The source gives `company.local` and
accounts such as `alice@company.local` and `bob@company.local` as examples. It also illustrates
a tree with `company.com`, `sales.company.com`, and `research.company.com`. A real enterprise
should plan a DNS namespace, commonly a subdomain of a domain the organization owns.

## 4. AD DS and domain controllers

**Active Directory Domain Services (AD DS)** is the Windows Server role that stores directory
information and provides authentication and centralized domain management.

A **domain controller (DC)** is a Windows Server running AD DS. Its responsibilities include
authenticating domain users and computers, storing directory information, supporting directory
queries, applying or helping distribute Group Policy, and replicating directory data with other
domain controllers.

Organizations may deploy multiple domain controllers for availability, fault tolerance, geographic
distribution, load distribution, and replication. They participate in directory replication rather
than keeping unrelated copies.

## Practical exercise

Using a diagram or synthetic company scenario, label clients, servers, AD DS, domain controllers,
DNS, a domain, an OU, and several directory objects. Explain how an employee's domain-connected
laptop locates a controller and receives access to an approved resource. Do not connect to or
collect information from a real organization's directory.

## Key takeaways

- Windows Server provides network services; server roles must be configured for their intended use.
- AD centralizes identity and resource management; AD DS is the Windows Server role that provides it.
- Forests contain trees, trees contain related domains, and domains contain directory objects.
- Domain controllers authenticate, store directory data, distribute policy, and replicate changes.

## Revision questions

1. How does a server differ from a client?
2. Name four Windows Server roles from the source.
3. What is the difference between AD and AD DS?
4. How do a domain, tree, and forest differ?
5. Why might an organization operate multiple domain controllers?
