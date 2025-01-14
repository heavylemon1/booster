import { BoosterDataMigrationEntity, Projects, ReadModel } from '@boostercloud/framework-core'
import { ProjectionResult } from '@boostercloud/framework-types'

@ReadModel({
  authorize: 'all',
})
export class DataMigrationsReadModel {
  public constructor(readonly id: string, readonly status: string, readonly lastUpdated: string) {}

  @Projects(BoosterDataMigrationEntity, 'id')
  public static updated(
    migration: BoosterDataMigrationEntity,
    _oldMigration?: DataMigrationsReadModel
  ): ProjectionResult<DataMigrationsReadModel> {
    return new DataMigrationsReadModel(migration.id, migration.status.toString(), migration.lastUpdated)
  }
}
