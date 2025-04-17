// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: 1,
  Id: 'liveblocks-storage',
  Name: 'Liveblocks Storage',
  Website: 'https://liveblocks.io',
  License: 'Proprietary',
  Deployment: ['Hosted'],
  AppTarget: {
    Platform: {
      data: ['Browser', 'Node']
    },
    LanguageSDK: {
      data: ['TypeScript']
    },
    FrameworkIntegrations: {
      data: ['React', 'Zustand', 'Redux']
    }
  },
  Networking: {
    Protocol: {
      data: ['WebSockets', 'HTTP']
    },
    Topology: {
      data: 'Client-Server'
    }
  },
  ServerSideData: {
    PersistenceMechanism: {
      data: ['Cloudflare Durable Object Storage', 'SQLite']
    },
    DataModelParadigm: {
      data: 'Document'
    },
    SchemaManagement: {
      data: ['Schema definition', 'Schema validation']
    },
    ExistingDatabaseSupport: {
      data: 'Webhooks and REST API',
      comment: 'Does not require a datastore, but you can migrate or automatically sync to your database with webhooks/REST API'
    }
  },
  ClientSideData: {
    QueryAPI: {
      data: ['Signals-based Reactivity', 'Reactive queries'],
      comment: 'JS: via subscription. React: via selector hooks, mutation callbacks. Automatically converts live data structures to JSON for easy UI.hook updates automatically on changes.can retrieve deep into the data structure without causing unnecessary renders.'
    },
    LocalRefreshLatency: {
      data: '16ms'
    },
    PersistenceMechanism: {
      data: ['Liveblocks Storage']
    },
    DataModel: {
      data: 'Document',
      comment: 'LiveObject'
    },
    SchemaManagement: {
      data: ['Schema definition']
    },
    OfflineReads: {
      data: 'Query Cache',
      comment: 'Previously accessed data is stored in-memory'
    },
    OptimisticUpdates: {
      data: 'Yes',
    },
    OfflineWrites: {
      data: 'Cached offline writes',
      comment: 'Full cached writes, stored in-memory, server will resolve conflict.'
    },
    DataSize: {
      data: 'limited by device capabilities'
    }
  },
  SynchronizationStrategy: {
    ConflictHandling: {
      data: 'Automatic via LWW or fractional indexing',
      comment: 'Values: LWW, LiveObject: LWW at attribute level, LiveMap: LWW at entry level, LiveList: fractional indexing (for insertions) or LWW (for replacements)'
    },
    WhereResolutionOccurs: {
      data: 'Server'
    },
    WhatGetsSynced: {
      data: {
        ClientToServer: 'ops',
        ServerToClient: 'ops, acks, and fix-ops (when conflict was resolved)'
      }
    },
    Authority: {
      data: 'Centralized'
    }
  },
  AuthIdentity: {
    Encryption: {
      data: 'transport-level (wss:// or https://)'
    },
    AuthenticationMethod: {
      data: ['JWT tokens', 'Public key']
    },
    AuthorizationPermissions: {
      data: 'ID tokens and Access tokens',
      comment: 'ID tokens (= permissions based on whats allowed on a per-room basis). Access tokens (= permissions granted in the token directly)'
    }
  },
  UIRelated: {
    Components: {
      data: ['Comments/Threads', 'Notifications', 'Presence']
    }
  },
  DevelopmentWorkflowsDX: {
    DebuggingTools: {
      data: ['DevTools', 'Dashboard', 'Data Inspector'],
      comment: 'Viewing/editing data, events, usage, etc.'
    },
    CLI: {
      data: 'CLI for installing examples, updating packages, creating your typescript config'
    },
    TypeSupport: {
      data: 'Full type support',
      comment: 'Via `liveblocks.config.ts`.'
    }
  }
})
