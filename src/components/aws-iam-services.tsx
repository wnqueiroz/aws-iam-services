"use client";

import React, { useMemo } from "react";
import { useQueryState } from "nuqs";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import servicesData, { ServiceData } from "./aws-services-iam-data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { CircleCheck, CircleX, Info } from "lucide-react";

function Link({ children, href }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-blue-600 hover:text-blue-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function formatValue(value: string, link?: string) {
  if (value === "Yes") return <CircleCheck className="text-green-600" />;
  if (value === "No") return <CircleX className="text-red-600" />;
  if (value === "Partial" && link) {
    return <Link href={link}>Partial</Link>;
  }
  if (value === "Info" && link) {
    return <Link href={link}>Info</Link>;
  }
  if (value === "Partial") return "Partial";
  if (value === "Info") return "Info";
  return value;
}

function EmptyState({
  searchTerm,
  hasActiveFilters,
  clearAllFilters,
}: {
  searchTerm: string | null;
  hasActiveFilters: boolean;
  clearAllFilters: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="w-16 h-16 mb-4 rounded-full bg-muted flex items-center justify-center">
        <svg
          className="w-8 h-8 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold mb-2">No services found</h3>
      {searchTerm ? (
        <p className="text-muted-foreground mb-4 max-w-md">
          No AWS services match your search for "{searchTerm}". Try adjusting
          your search term or clearing some filters.
        </p>
      ) : hasActiveFilters ? (
        <p className="text-muted-foreground mb-4 max-w-md">
          No AWS services match your current filter criteria. Try adjusting or
          clearing some filters to see more results.
        </p>
      ) : (
        <p className="text-muted-foreground mb-4 max-w-md">
          No AWS services are currently available. Please try again later.
        </p>
      )}
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={() => clearAllFilters()}
          className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Clear all filters
        </button>
      </div>
    </div>
  );
}

export default function AWSIAMServicesTable() {
  const [searchTerm, setSearchTerm] = useQueryState("search", {
    defaultValue: "",
  });
  const [actionsFilter, setActionsFilter] = useQueryState("actions", {
    defaultValue: "all",
  });
  const [resourceLevelFilter, setResourceLevelFilter] = useQueryState(
    "resourceLevel",
    {
      defaultValue: "all",
    }
  );
  const [resourceBasedFilter, setResourceBasedFilter] = useQueryState(
    "resourceBased",
    {
      defaultValue: "all",
    }
  );
  const [abacFilter, setAbacFilter] = useQueryState("abac", {
    defaultValue: "all",
  });
  const [temporaryCredentialsFilter, setTemporaryCredentialsFilter] =
    useQueryState("temporaryCredentials", {
      defaultValue: "all",
    });
  const [serviceLinkedRolesFilter, setServiceLinkedRolesFilter] = useQueryState(
    "serviceLinkedRoles",
    {
      defaultValue: "all",
    }
  );

  const clearAllFilters = () => {
    setSearchTerm(null);
    setActionsFilter(null);
    setResourceLevelFilter(null);
    setResourceBasedFilter(null);
    setAbacFilter(null);
    setTemporaryCredentialsFilter(null);
    setServiceLinkedRolesFilter(null);
  };

  const filteredData = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesSearch = service.service
        .toLowerCase()
        .includes((searchTerm || "").toLowerCase());
      const matchesActions =
        !actionsFilter ||
        actionsFilter === "all" ||
        service.actions === actionsFilter;
      const matchesResourceLevel =
        !resourceLevelFilter ||
        resourceLevelFilter === "all" ||
        service.resourceLevel === resourceLevelFilter;
      const matchesResourceBased =
        !resourceBasedFilter ||
        resourceBasedFilter === "all" ||
        service.resourceBased === resourceBasedFilter;
      const matchesAbac =
        !abacFilter || abacFilter === "all" || service.abac === abacFilter;
      const matchesTemporaryCredentials =
        !temporaryCredentialsFilter ||
        temporaryCredentialsFilter === "all" ||
        service.temporaryCredentials === temporaryCredentialsFilter;
      const matchesServiceLinkedRoles =
        !serviceLinkedRolesFilter ||
        serviceLinkedRolesFilter === "all" ||
        service.serviceLinkedRoles === serviceLinkedRolesFilter;

      return (
        matchesSearch &&
        matchesActions &&
        matchesResourceLevel &&
        matchesResourceBased &&
        matchesAbac &&
        matchesTemporaryCredentials &&
        matchesServiceLinkedRoles
      );
    });
  }, [
    searchTerm,
    actionsFilter,
    resourceLevelFilter,
    resourceBasedFilter,
    abacFilter,
    temporaryCredentialsFilter,
    serviceLinkedRolesFilter,
  ]);

  const uniqueValues = (field: keyof ServiceData) => {
    const values = [
      ...new Set(servicesData.map((service) => service[field] as string)),
    ];
    return values.filter((value) => value && value !== "");
  };

  const hasActiveFilters = (): boolean => {
    return Boolean(
      (actionsFilter && actionsFilter !== "all") ||
        (resourceLevelFilter && resourceLevelFilter !== "all") ||
        (resourceBasedFilter && resourceBasedFilter !== "all") ||
        (abacFilter && abacFilter !== "all") ||
        (temporaryCredentialsFilter && temporaryCredentialsFilter !== "all") ||
        (serviceLinkedRolesFilter && serviceLinkedRolesFilter !== "all")
    );
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* AWS Header Image */}
      {/* <div className="w-full mb-8">
        <img src="https://media.licdn.com/dms/image/v2/C4E16AQEm8nzOyZDEPw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1586809796854?e=1757548800&v=beta&t=eGjjdbDGyQcUwUNSa_bbHdr1po5SveqJ6BlOb_3pw-E" alt="AWS Services Header" className="w-full h-auto rounded-lg shadow-sm" />
      </div> */}

      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          <Link href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html#all_svcs">
            Services that work with IAM
          </Link>
        </h2>
        <p className="text-muted-foreground mt-2">
          Comprehensive list of AWS services and their IAM compatibility
          features
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Search Services</label>
              <Input
                placeholder="Search services..."
                value={searchTerm || ""}
                onChange={(e) => setSearchTerm(e.target.value || null)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <label className="text-sm font-medium">Actions</label>
                <Dialog>
                  <DialogTrigger>
                    <Info size={16} className="text-blue-600" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Actions</DialogTitle>
                      <DialogDescription>
                        Operations that can be performed on resources, such as{" "}
                        <code className="text-red-500 bg-red-100 rounded">
                          ec2:StartInstances
                        </code>{" "}
                        or{" "}
                        <code className="text-red-500 bg-red-100 rounded">
                          s3:PutObject
                        </code>
                        .
                      </DialogDescription>
                      <div className="mt-4 text-sm text-gray-700">
                        <p className="mb-2">
                          <strong>Comparison with others:</strong>
                        </p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>
                            <strong>Resource-level permissions:</strong> Actions
                            define <em>what</em> you can do; resource-level
                            permissions define <em>where</em>.
                          </li>
                          <li>
                            <strong>Identity-based policies:</strong> Use
                            actions to specify allowed operations.
                          </li>
                          <li>
                            <strong>Resource-based policies:</strong> Also
                            specify actions allowed on a resource.
                          </li>
                          <li>
                            <strong>ABAC:</strong> ABAC policies still reference
                            actions but control them conditionally via tags.
                          </li>
                          <li>
                            <strong>Temporary credentials:</strong> The
                            credentials inherit permissions for specific
                            actions.
                          </li>
                          <li>
                            <strong>Service-linked roles:</strong> Contain
                            policies defining actions the service can perform.
                          </li>
                        </ul>
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
              <Select
                value={actionsFilter || "all"}
                onValueChange={(value) =>
                  setActionsFilter(value === "all" ? null : value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Actions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  {uniqueValues("actions").map((value) => (
                    <SelectItem key={value} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <label className="text-sm font-medium">
                  Resource-level permissions
                </label>
                <Dialog>
                  <DialogTrigger>
                    <Info size={16} className="text-blue-600" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Info size={16} className="text-blue-600" />
                        Resource-level permissions
                      </DialogTitle>
                      <DialogDescription>
                        The ability to grant permissions scoped to specific
                        resources instead of granting access to all resources in
                        a service.
                      </DialogDescription>
                      <div className="mt-8 text-sm text-gray-700">
                        <p className="mb-2">
                          <strong>Comparison with others:</strong>
                        </p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>
                            <strong>Actions:</strong> Resource-level permissions
                            define <em>which resources</em> an <em>action</em>{" "}
                            applies to. The action is{" "}
                            <code className="text-red-500 bg-red-100 rounded">
                              s3:GetObject
                            </code>
                            ; the resource-level permission says <em>where</em>{" "}
                            it can be used.
                          </li>
                          <li>
                            <strong>Identity-based policies:</strong> These can
                            include resource-level permissions when you specify
                            ARNs in the{" "}
                            <code className="text-red-500 bg-red-100 rounded">
                              Resource
                            </code>{" "}
                            element.
                          </li>
                          <li>
                            <strong>Resource-based policies:</strong> Always
                            attached to a resource and inherently define
                            resource-level permissions.
                          </li>
                          <li>
                            <strong>ABAC:</strong> Attribute-based control
                            enforces resource constraints dynamically via tags,
                            rather than static ARNs.
                          </li>
                          <li>
                            <strong>Temporary credentials:</strong> Can carry
                            resource-level permissions via the assumed role
                            policies, but the credentials themselves just
                            represent the session.
                          </li>
                          <li>
                            <strong>Service-linked roles:</strong> Roles used by
                            AWS services; their policies often include
                            resource-level permissions to limit scope.
                          </li>
                        </ul>
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
              <Select
                value={resourceLevelFilter || "all"}
                onValueChange={(value) =>
                  setResourceLevelFilter(value === "all" ? null : value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Resource-level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  {uniqueValues("resourceLevel").map((value) => (
                    <SelectItem key={value} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <label className="text-sm font-medium">
                  Resource-based policies
                </label>

                <Dialog>
                  <DialogTrigger>
                    <Info size={16} className="text-blue-600" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Resource-based policies</DialogTitle>
                      <DialogDescription>
                        Policies attached directly to a resource, stating who
                        can access it and what actions are allowed.
                      </DialogDescription>
                      <div className="mt-4 text-sm text-gray-700">
                        <p className="mb-2">
                          <strong>Comparison with others:</strong>
                        </p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>
                            <strong>Resource-level permissions:</strong>{" "}
                            Resource-based policies always define permissions
                            scoped to the resource itself.
                          </li>
                          <li>
                            <strong>Actions:</strong> Specify which operations
                            are allowed on the resource.
                          </li>
                          <li>
                            <strong>Identity-based policies:</strong> The
                            alternative model where policies are attached to
                            identities rather than resources.
                          </li>
                          <li>
                            <strong>ABAC:</strong> Can include tag-based
                            conditions for attribute-based access.
                          </li>
                          <li>
                            <strong>Temporary credentials:</strong> The caller
                            with temporary credentials can be authorized via
                            resource-based policies.
                          </li>
                          <li>
                            <strong>Service-linked roles:</strong> Resources may
                            include policies granting access to service-linked
                            roles.
                          </li>
                        </ul>
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>

              <Select
                value={resourceBasedFilter || "all"}
                onValueChange={(value) =>
                  setResourceBasedFilter(value === "all" ? null : value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Resource-based" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  {uniqueValues("resourceBased").map((value) => (
                    <SelectItem key={value} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <label className="text-sm font-medium">ABAC</label>
                <Dialog>
                  <DialogTrigger>
                    <Info size={16} className="text-blue-600" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        ABAC (Attribute-Based Access Control)
                      </DialogTitle>
                      <DialogDescription>
                        A model where access decisions are based on attributes
                        (usually tags) rather than explicit ARNs.
                      </DialogDescription>
                      <div className="mt-4 text-sm text-gray-700">
                        <p className="mb-3">
                          <strong>What it is:</strong>
                          <br />A model where access decisions are based on
                          attributes (usually tags) rather than explicit ARNs.
                        </p>
                        <p className="mb-2">
                          <strong>Comparison with others:</strong>
                        </p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>
                            <strong>Resource-level permissions:</strong> ABAC is
                            a dynamic way to express resource constraints.
                          </li>
                          <li>
                            <strong>Actions:</strong> ABAC still requires
                            defining actions being controlled.
                          </li>
                          <li>
                            <strong>Identity-based policies:</strong> ABAC is
                            most often implemented via identity-based policies
                            with conditions on tags.
                          </li>
                          <li>
                            <strong>Resource-based policies:</strong> Can also
                            include tag-based conditions.
                          </li>
                          <li>
                            <strong>Temporary credentials:</strong> Session tags
                            can be passed to enforce ABAC during assumed role
                            sessions.
                          </li>
                          <li>
                            <strong>Service-linked roles:</strong> Typically do
                            not use ABAC; permissions are predefined by AWS.
                          </li>
                        </ul>
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
              <Select
                value={abacFilter || "all"}
                onValueChange={(value) =>
                  setAbacFilter(value === "all" ? null : value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Filter by ABAC" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  {uniqueValues("abac").map((value) => (
                    <SelectItem key={value} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <label className="text-sm font-medium">
                  Temporary credentials
                </label>
                <Dialog>
                  <DialogTrigger>
                    <Info size={16} className="text-blue-600" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Temporary credentials</DialogTitle>
                      <DialogDescription>
                        Short-lived credentials obtained via STS (e.g.,
                        AssumeRole, federation) that represent a time-bounded
                        session.
                      </DialogDescription>
                      <div className="mt-4 text-sm text-gray-700">
                        <p className="mb-2">
                          <strong>Comparison with others:</strong>
                        </p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>
                            <strong>Resource-level permissions:</strong> The
                            permissions embedded in the session can include
                            resource scoping.
                          </li>
                          <li>
                            <strong>Actions:</strong> The assumed role or
                            session policy specifies allowed actions.
                          </li>
                          <li>
                            <strong>Identity-based policies:</strong> The
                            effective permissions come from identity-based
                            policies of the role assumed.
                          </li>
                          <li>
                            <strong>Resource-based policies:</strong> May allow
                            or deny access to the caller using temporary
                            credentials.
                          </li>
                          <li>
                            <strong>ABAC:</strong> Session tags support ABAC
                            enforcement.
                          </li>
                          <li>
                            <strong>Service-linked roles:</strong> When a
                            service assumes a service-linked role, it uses
                            temporary credentials under the hood.
                          </li>
                        </ul>
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
              <Select
                value={temporaryCredentialsFilter || "all"}
                onValueChange={(value) =>
                  setTemporaryCredentialsFilter(value === "all" ? null : value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Temporary credentials" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  {uniqueValues("temporaryCredentials").map((value) => (
                    <SelectItem key={value} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <label className="text-sm font-medium">
                  Service-linked roles
                </label>
                <Dialog>
                  <DialogTrigger>
                    <Info size={16} className="text-blue-600" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Service-linked roles</DialogTitle>
                      <DialogDescription>
                        Roles created and managed by AWS to allow a service to
                        perform actions on your behalf.
                      </DialogDescription>
                      <div className="mt-4 text-sm text-gray-700">
                        <p className="mb-2">
                          <strong>Comparison with others:</strong>
                        </p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>
                            <strong>Resource-level permissions:</strong> Often
                            have resource-level scope permissions needed by the
                            service.
                          </li>
                          <li>
                            <strong>Actions:</strong> Defined in the policies
                            attached to the role.
                          </li>
                          <li>
                            <strong>Identity-based policies:</strong>{" "}
                            Service-linked roles are a type of role with
                            attached policies.
                          </li>
                          <li>
                            <strong>Resource-based policies:</strong> May permit
                            access to service-linked roles.
                          </li>
                          <li>
                            <strong>ABAC:</strong> Typically not applied to
                            service-linked roles.
                          </li>
                          <li>
                            <strong>Temporary credentials:</strong> Services
                            assume these roles and use temporary credentials for
                            operations.
                          </li>
                        </ul>
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
              <Select
                value={serviceLinkedRolesFilter || "all"}
                onValueChange={(value) =>
                  setServiceLinkedRolesFilter(value === "all" ? null : value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Service-linked roles" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  {uniqueValues("serviceLinkedRoles").map((value) => (
                    <SelectItem key={value} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>AWS Services IAM Compatibility</CardTitle>
            <Badge variant="secondary">
              {filteredData.length} of {servicesData.length} services
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[250px]">Service</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                  <TableHead className="text-center">
                    Resource-level permissions
                  </TableHead>
                  <TableHead className="text-center">
                    Resource-based policies
                  </TableHead>
                  <TableHead className="text-center">ABAC</TableHead>
                  <TableHead className="text-center">
                    Temporary credentials
                  </TableHead>
                  <TableHead className="text-center">
                    Service-linked roles
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="p-0">
                      <EmptyState
                        searchTerm={searchTerm}
                        clearAllFilters={clearAllFilters}
                        hasActiveFilters={hasActiveFilters()}
                      />
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredData.map((service, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <a
                          href={service.serviceLink}
                          className="text-blue-600 hover:text-blue-800 underline font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {service.service}
                        </a>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          {formatValue(service.actions)}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          {formatValue(
                            service.resourceLevel,
                            service.resourceLevelLink
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          {formatValue(
                            service.resourceBased,
                            service.resourceBasedLink
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          {formatValue(service.abac, service.abacLink)}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          {formatValue(service.temporaryCredentials)}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          {formatValue(
                            service.serviceLinkedRoles,
                            service.serviceLinkedRolesLink
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
