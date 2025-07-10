"use client";

import React, { useState, useMemo } from "react";

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
  if (value === "Yes") return "✅";
  if (value === "No") return "❌";
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
  searchTerm: string;
  hasActiveFilters: boolean;
  clearAllFilters: () => void
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
          // onClick={() => window.location.reload()}
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
  const [searchTerm, setSearchTerm] = useState("");
  const [actionsFilter, setActionsFilter] = useState("all");
  const [resourceLevelFilter, setResourceLevelFilter] = useState("all");
  const [resourceBasedFilter, setResourceBasedFilter] = useState("all");
  const [abacFilter, setAbacFilter] = useState("all");
  const [temporaryCredentialsFilter, setTemporaryCredentialsFilter] =
    useState("all");
  const [serviceLinkedRolesFilter, setServiceLinkedRolesFilter] =
    useState("all");

  const clearAllFilters = () => {
    setSearchTerm("");
    setActionsFilter("all");
    setResourceLevelFilter("all");
    setResourceBasedFilter("all");
    setAbacFilter("all");
    setTemporaryCredentialsFilter("all");
    setServiceLinkedRolesFilter("all");
  };

  const filteredData = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesSearch = service.service
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesActions =
        actionsFilter === "all" || service.actions === actionsFilter;
      const matchesResourceLevel =
        resourceLevelFilter === "all" ||
        service.resourceLevel === resourceLevelFilter;
      const matchesResourceBased =
        resourceBasedFilter === "all" ||
        service.resourceBased === resourceBasedFilter;
      const matchesAbac = abacFilter === "all" || service.abac === abacFilter;
      const matchesTemporaryCredentials =
        temporaryCredentialsFilter === "all" ||
        service.temporaryCredentials === temporaryCredentialsFilter;
      const matchesServiceLinkedRoles =
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

  const hasActiveFilters = () => {
    return (
      actionsFilter !== "all" ||
      resourceLevelFilter !== "all" ||
      resourceBasedFilter !== "all" ||
      abacFilter !== "all" ||
      temporaryCredentialsFilter !== "all" ||
      serviceLinkedRolesFilter !== "all"
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Actions</label>
              <Select value={actionsFilter} onValueChange={setActionsFilter}>
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
              <label className="text-sm font-medium">
                Resource-level permissions
              </label>
              <Select
                value={resourceLevelFilter}
                onValueChange={setResourceLevelFilter}
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
              <label className="text-sm font-medium">
                Resource-based policies
              </label>
              <Select
                value={resourceBasedFilter}
                onValueChange={setResourceBasedFilter}
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
              <label className="text-sm font-medium">ABAC</label>
              <Select value={abacFilter} onValueChange={setAbacFilter}>
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
              <label className="text-sm font-medium">
                Temporary credentials
              </label>
              <Select
                value={temporaryCredentialsFilter}
                onValueChange={setTemporaryCredentialsFilter}
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
              <label className="text-sm font-medium">
                Service-linked roles
              </label>
              <Select
                value={serviceLinkedRolesFilter}
                onValueChange={setServiceLinkedRolesFilter}
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
                        {formatValue(service.actions)}
                      </TableCell>
                      <TableCell className="text-center">
                        {formatValue(
                          service.resourceLevel,
                          service.resourceLevelLink
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {formatValue(
                          service.resourceBased,
                          service.resourceBasedLink
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {formatValue(service.abac, service.abacLink)}
                      </TableCell>
                      <TableCell className="text-center">
                        {formatValue(service.temporaryCredentials)}
                      </TableCell>
                      <TableCell className="text-center">
                        {formatValue(
                          service.serviceLinkedRoles,
                          service.serviceLinkedRolesLink
                        )}
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
